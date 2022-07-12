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

    uint public candidateCount = 1; //Total # of candidates
    uint public voterCount = 0; //Total # of user voted
    address public deductAddress = 0xdb4D508855BD1420eED27Adf68B56EbE3745968a; //Address to send tokens to for vote
    uint public cycleCount = 1; 
    uint private winner = 1;

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

    function startVote() public onlyOwner 
    {
        require(voteStart == phase.setUp, "Not setUp phase");
        voteStart = phase.voting;
        emit phaseChange("voting");
    }

    function setUpVote() public onlyOwner
    {
        require(voteStart == phase.result, "Not result phase");
        voteStart = phase.setUp;
        candidateCount = 1;
        voterCount = 0;
        cycleCount++;
        emit phaseChange("set Up");
    }

    function endVote() public onlyOwner 
    {
        require(voteStart == phase.voting, "Not voting phase");
        voteStart = phase.result;

        for(uint i = 1; i<=candidateCount; i++)
        {
            if(totalCandidate[i].votes > totalCandidate[winner].votes)
            {
                winner = i;
            }
        }

        emit phaseChange("result");
    }

    function addCandidate(string[] memory _name) public onlyOwner 
    {
        require(voteStart == phase.setUp, "Not set up phase");
        
        for(uint i = 0; i< _name.length; i++)
        {
            totalCandidate[candidateCount] = candidate(candidateCount, _name[i], 0); //set
            candidateCount++; //increment total candidates
        }
    }

    function editCandidate (uint _id, string memory _name) public onlyOwner 
    {
        require(voteStart == phase.setUp, "Not set up phase");
        require(_id != 0, "Must be valid candidate");
        require(_id <= candidateCount, "Must be valid candidate");

        totalCandidate[_id] = candidate(_id, _name, 0); //set
    }

    function addVote(uint _idCount) public 
    {
        require(voteStart == phase.voting, "Not voting phase");
        require(_idCount != 0, "Require valid candidate");
        require(_idCount <= candidateCount, "Require valid candidate");
        require(token.balanceOf(msg.sender) != 0, "Invalid balance");
        require(hasVoted[msg.sender].cycleVoted != cycleCount, "You have already voted");

        token.transferFrom(msg.sender, deductAddress, 1*(10**18));

        totalCandidate[_idCount].votes++;
        hasVoted[msg.sender].cycleVoted = cycleCount;
        hasVoted[msg.sender].votedFor = _idCount;
        hasVoted[msg.sender].receivedToken = false;

        emit userVotedFor(msg.sender, _idCount);
    }

    function cancelVote() public 
    {
        require(voteStart == phase.voting, "Not voting phase");
        require(hasVoted[msg.sender].cycleVoted == cycleCount, "You have not voted");
        
        hasVoted[msg.sender].cycleVoted = hasVoted[msg.sender].cycleVoted - 1;

        uint _temp = hasVoted[msg.sender].votedFor;

        token.transfer(msg.sender, 1*(10**18));
        totalCandidate[_temp].votes = totalCandidate[_temp].votes - 1;
        hasVoted[msg.sender].votedFor = 0;
        hasVoted[msg.sender].receivedToken = false;

        emit userCanceledVote(msg.sender, _temp);
    }

    function getWinner() public view returns (uint win)
    {
        require(voteStart == phase.result, "Not result phase");
        return winner;
    }

    function getBackToken() public
    {
        require(voteStart == phase.result, "not result phase");
        require(hasVoted[msg.sender].receivedToken == false, "You've already received your tokens");

        if(hasVoted[msg.sender].votedFor != winner)
        {
            token.transfer(msg.sender, 1*(10**18));
            hasVoted[msg.sender].receivedToken = true;
            emit userReceivedToken(msg.sender);
        }
    }
}