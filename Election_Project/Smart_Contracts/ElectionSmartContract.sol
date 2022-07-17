// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract ElectSmartContract is Ownable  
{

    struct candidate 
    {
        uint candID;
        string candName;
        uint votes;
    }  

    enum phase 
    {
        setUp, //allow adding candidates
        voting, //allow voting
        result //allow for viewing
    }

    struct userVoted
    {
        uint cycleVoted;
        uint votedFor;
        bool receivedToken;
    }

    uint public candidateCount = 0; //Total # of candidates
    uint public voterCount = 0; //Total # of user voted
    uint public cycleCount = 1; 
    uint private winner;

    mapping(uint => candidate) public totalCandidate;
    mapping (address => userVoted) public hasVoted;
    phase voteStart = phase.setUp;
    ERC20 public token; //0x5944F2F4af55167Bc57Fa2130be6c2212C6d474b

    event phaseChange(string _phase);
    event userVotedFor(address userAdd, uint candVotedFor);
    event userCanceledVote(address userAddCanceled, uint candVotedForCanceled);
    event userReceivedToken(address userAddReceived);

    constructor(ERC20 _token)
    {
        token = _token;
    }

    function changePhase() public 
    {
        if(voteStart == phase.setUp)
        {
            voteStart = phase.voting;
            emit phaseChange("Voting");
        }
        else if(voteStart == phase.voting)
        {
            voteStart = phase.result;
            emit phaseChange("Results");
            endVote();

        }
        else if(voteStart == phase.result)
        {
            voteStart = phase.setUp;
            emit phaseChange("setUp");
            candidateCount = 0;
            voterCount = 0;
            cycleCount++;
            winner = 0;
        }
    }

    function endVote() private
    {
        require(voteStart == phase.result, "Not Result phase");

        for(uint i = 1; i<= candidateCount; i++)
        {
            if(totalCandidate[i].votes > totalCandidate[winner].votes)
            {
                winner = i;
            }
        }
    }

    function addCandidate(string[] memory _name) public onlyOwner 
    {
        require(voteStart == phase.setUp, "Not set up phase");
        
        for(uint i = 0; i< _name.length; i++)
        {
            totalCandidate[i] = candidate(i, _name[i], 0); //set
        }

        candidateCount = _name.length;
    }

    function addVote(uint _idCount) public 
    {
        require(voteStart == phase.voting, "Not voting phase");
        require(_idCount <= candidateCount, "Require valid candidate");
        require(token.balanceOf(msg.sender) != 0, "Invalid balance");
        require(hasVoted[msg.sender].cycleVoted != cycleCount, "You have already voted");
        require(hasVoted[msg.sender].receivedToken == true, "You don't have tokens");

        token.transferFrom(msg.sender, address(this), 1*(10**18));

        totalCandidate[_idCount].votes++;
        hasVoted[msg.sender].cycleVoted = cycleCount;
        hasVoted[msg.sender].votedFor = _idCount;
        hasVoted[msg.sender].receivedToken = false;

        emit userVotedFor(msg.sender, _idCount);
        voterCount++;
    }

    function cancelVote() public 
    {
        require(voteStart == phase.voting, "Not voting phase");
        require(hasVoted[msg.sender].cycleVoted == cycleCount, "You haven't voted");
        require(hasVoted[msg.sender].receivedToken == false, "You haven't voted");
        
        hasVoted[msg.sender].cycleVoted = hasVoted[msg.sender].cycleVoted - 1;

        uint _temp = hasVoted[msg.sender].votedFor;

        token.transfer(msg.sender, 1*(10**18));
        totalCandidate[_temp].votes = totalCandidate[_temp].votes - 1;
        hasVoted[msg.sender].votedFor = 0;
        hasVoted[msg.sender].receivedToken = true;

        emit userCanceledVote(msg.sender, _temp);
        voterCount--;
    }

    function getWinner() public view returns (uint win)
    {
        require(voteStart == phase.result, "Not result phase");
        return winner;
    }

    function getToken() public
    {
        require(hasVoted[msg.sender].receivedToken == false, "You've already received your tokens");
        require(hasVoted[msg.sender].cycleVoted != cycleCount, "You've already voted for this cycle");

            token.transfer(msg.sender, 1*(10**18));
            hasVoted[msg.sender].receivedToken = true;
            emit userReceivedToken(msg.sender);
    }

    function getPhase() public view returns(uint _phase)
    {
        if(voteStart == phase.setUp)
        {
            return 1;
        }
        if(voteStart == phase.voting)
        {
            return 2;
        }
        if(voteStart == phase.result)
        {
            return 3;
        }
    }

    function withdrawFunds() public onlyOwner
    {
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }

    function addFunds(uint amount) public onlyOwner
    {
        token.transferFrom(msg.sender, address(this), amount*(10**18));
    }
}