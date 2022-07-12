const serverUrl= "https://t4k9vsdmgatd.usemoralis.com:2053/server";
const appId= "e7yCBIDAGk7OUCoJnrIAT1WQj3vJE1S8YbAY8TXp";
Moralis.start({ serverUrl, appId });
const currentUser= Moralis.User.current();

const ABI= 
[ //test commit
	[
		{
			"inputs": [
				{
					"internalType": "contract ERC20",
					"name": "_token",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "string",
					"name": "_phase",
					"type": "string"
				}
			],
			"name": "phaseChange",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "userAddCanceled",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "candVotedForCanceled",
					"type": "uint256"
				}
			],
			"name": "userCanceledVote",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "userAddReceived",
					"type": "address"
				}
			],
			"name": "userReceivedToken",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "userAdd",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "candVotedFor",
					"type": "uint256"
				}
			],
			"name": "userVotedFor",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "string[]",
					"name": "_name",
					"type": "string[]"
				}
			],
			"name": "addCandidate",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_idCount",
					"type": "uint256"
				}
			],
			"name": "addVote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "cancelVote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "candidateCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "cycleCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "deductAddress",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				}
			],
			"name": "editCandidate",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "endVote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getBackToken",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getWinner",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "win",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "hasVoted",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "cycleVoted",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "votedFor",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "receivedToken",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "setUpVote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "startVote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "token",
			"outputs": [
				{
					"internalType": "contract ERC20",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "totalCandidate",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "candID",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "candName",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "votes",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "voterCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
];

var Arr= 
[
	{'CandID':'1', 'name':'Peter', 'votes':'0'},
	{'CandID':'2', 'name':'John', 'votes':'0'},
	{'CandID':'3', 'name':'Jared', 'votes':'0'},
	{'CandID':'4', 'name':'Eric', 'votes':'0'},
	{'CandID':'5', 'name':'Jack', 'votes':'0'},
	{'CandID':'6', 'name':'James', 'votes':'0'},
]

function Init()
{
	//getCandidatesInfo(Arr);
	buildTable(Arr);
}

function refresh()
{
	//getCandidatesInfo(Arr);
	buildTable(Arr);
}

async function login() 
{
  let user= Moralis.User.current();
  var displayUser= document.getElementById('user-address');
  if (!user) {
    user= await Moralis.authenticate({
      signingMessage: "Log in to Election Voting DApp",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
  		displayUser.innerHTML= user.get("ethAddress");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() 
{
  await Moralis.User.logOut();
  currentUser = Moralis.User.current();
  console.log("logged out");

  var displayUser= document.getElementById('user-address');
  displayUser.innerHTML= "Not Connected.";
}

// async function getToken() 
// {
	//Send 1 token to user
// }

async function candvote(num)
{
	let temp = parseInt(Arr[num].votes);
	temp++;
	Arr[num].votes = temp;
}

// async function getCandidatesInfo(data) 
// {
	//Update Array
// }

function buildTable(data)
{
	var table= document.getElementById('myTable');

	//delete old table (for refresh button)
	table.innerHTML= "";

	for(var i= 0; i<data.length; i++)
	{
		var row = `<tr>
		<td>${data[i].CandID}</td>
		<td>${data[i].name}</td>
		<td>${data[i].votes}</td>
		<td><button id = vote-cand${data[i].CandID} onclick = candvote(${i})>Vote</button></td>
 		</tr>`
		table.innerHTML+= row;
	}
}

Init();

document.getElementById("btn-login").onclick= login;
document.getElementById("btn-logout").onclick= logOut;
document.getElementById("btn-refresh").onclick= refresh;