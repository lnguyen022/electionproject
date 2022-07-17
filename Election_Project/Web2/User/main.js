
const contractAddress= '0xD7615e8ECeD413db071934758B15Cb42184d579B'
const tokenAddress= '0x5944F2F4af55167Bc57Fa2130be6c2212C6d474b'
const contractABI= [
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addFunds",
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
		"name": "changePhase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
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
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [],
		"name": "withdrawFunds",
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
		"name": "getPhase",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_phase",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
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
const tokenABI= [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
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
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
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
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let contract
let account
let token
let candidateCount
let cycleCount
let voterCount
let winner
let phase // SetUp= 1, voting= 2, result= 3
let candidates= []
let votedFor
let userCycle
let _showResults= false
let _check=false

function init()
{
	const body= document.body
	body.innerHTML= `
	<div>
	<h1>Election</h1>

        <div id="phases" class="div1">
            Phase: 
            <br>Cycle:
        </div>

        <h2 id="lbl-wallet">Connected: </h2>

        <table class="table">
            <tr class="table-info">
                <th>Candidate ID#</th>
                <th>Candidate Name</th>
                <th>Votes</th>
                <th>Action</th>
            </tr>
            <tbody id="table-body">
            </tbody>
        </table>

        <button id="btn-refresh" onclick="refresh()">Refresh</button>
		</div>
	`
	const lbl= document.getElementById('lbl-wallet')
		lbl.classList.add("show")
		lbl.innerHTML= "Connected: " + account

	updateData()
}

async function approve()
{
		const provider= await detectEthereumProvider()

		const web3= new Web3(provider)
		const _contract= new web3.eth.Contract(
			contractABI, contractAddress
		)

		const _token= new web3.eth.Contract(
			tokenABI, tokenAddress
		)

		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		const _account= accounts[0]

		account = _account
		contract= _contract
		token= _token

		token.methods.approve(contractAddress, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({from:account})


		const display= document.getElementById('cnt-wallet')
			display.style.fontSize= "20px"
			display.innerHTML= `Wallet: ${account}`
			display.onclick= ""

		getToken(1)
}


async function getToken(check)
{
	const hasVoted= await contract.methods.hasVoted(account).call()
    cycleCount= await contract.methods.cycleCount().call()
	const span=document.getElementById('next')

	if(hasVoted.receivedToken== true || hasVoted.cycleVoted== cycleCount)
	{
		init()
	}
	else if(check== 1)
	{
		let span=document.getElementById('next')
		span.innerHTML= `<h3 id= "btn-gettoken" onclick="getToken(2)">Get Tokens</h3>`
	}
	else if(check== 2)
	{
		span.innerHTML= `<h3 id= "btn-gettoken" onclick="getToken(3)">Confirm >></h3>`
		contract.methods.getToken().send({from:account})
	}
	else if(check== 3)
	{
		getToken(1)
	}
}

async function updateData()
{
    candidateCount= await contract.methods.candidateCount().call()
    cycleCount= await contract.methods.cycleCount().call()
    voterCount= await contract.methods.voterCount().call()
    let temp= await contract.methods.getPhase().call()
	candidates = []
	let hasVoted= await contract.methods.hasVoted(account).call()
	votedFor= hasVoted.votedFor
	userCycle= hasVoted.cycleVoted

    for(let i= 0; i<candidateCount; i++)
    {
        const candidate= await contract.methods.totalCandidate(i).call()
        candidates[i]= candidate
    }

    if(temp== 1)
    {
        phase= "Set Up"
        updateFE() //Update Frontend
    }
    if(temp== 2)
    {
        phase= "Voting"
        updateFE() //Update Frontend

    }
    if(temp== 3)
    {
        phase= "Results"
        winner= getWinner()
    }
}

function updateFE()
{
    const div= document.getElementById('phases')
    const table= document.getElementById('table-body')

	table.innerHTML= ""

    div.innerHTML= `
        Phase: ${phase}
        <br>
        Cycle: ${cycleCount}
      	`
		
		if(userCycle!= cycleCount && phase=="Voting")
		{
			for(let i=0; i<candidateCount; i++)
			{
				var row= `
				<tr>
				<td>${candidates[i].candID}</td>
				<td>${candidates[i].candName}</td>
				<td>${candidates[i].votes}</td>
				<td><button id = vote-cand${candidates[i].candID} onclick= vote(${candidates[i].candID})>Vote</button></td>
				</tr>`
				table.innerHTML+= row
			}
		}
		else
		{
			for(let i= 0; i<candidateCount; i++)
			{
				var row= `
				<tr>
				<td>${candidates[i].candID}</td>
				<td>${candidates[i].candName}</td>
				<td>${candidates[i].votes}</td>
				<td><button id = vote-cand${candidates[i].candID} class="disabled")>Vote</button></td>
				</tr>`
				table.innerHTML+= row
			}

			if(_check== false)
			{
				_check=true
				document.body.innerHTML+=`
				<h4 id="cancel" onmouseover= "cancelIn()" onmouseout= "cancelOut()" onclick= "cancelVote()">Voted: ${candidates[votedFor].candName}</h4>
				`
			}
		}
}

async function getWinner()
{
	const _winner= await contract.methods.getWinner().call()
	let i= parseInt(_winner)
	winner= candidates[i].candName

	const bod= document.body
	bod.innerHTML= ""
	bod.innerHTML= `
		<h1>Election</h1>
		<h3 id="win" onmouseover= "mouseOver()" onmouseout= "mouseOut()" onclick= "showResult()">
		Winner: ${winner}
		</h3>
		`
}

function mouseOver()
{
	document.getElementById("win").innerHTML= "Show Results >>"
}

function mouseOut()
{
	document.getElementById("win").innerHTML= "Winner: "+ winner
}

function vote(num)
{
    contract.methods.addVote(num).send({from:account})
}

function refresh()
{
	updateData()
}

function showResult()
{
	if(_showResults == false)
	{
		_showResults = true
		document.body.innerHTML+= `
			<table class="table">
				<tr class="table-info">
					<th>Candidate ID#</th>
					<th>Candidate Name</th>
					<th>Votes</th>
				</tr>
				<tbody id="table-body">
				</tbody>
			</table>`

	const table= document.getElementById('table-body')

	for(let i=0; i<candidateCount; i++)
	{
		var row= `
		<tr>
		<td>${candidates[i].candID}</td>
		<td>${candidates[i].candName}</td>
		<td>${candidates[i].votes}</td>
		</tr>`
		table.innerHTML+= row
	}
	}
}

function cancelIn()
{
	const ca= document.getElementById("cancel")

	if(userCycle== cycleCount)
	{
		ca.innerHTML= "Cancel Vote?"
	}
	else
	{
		ca.innerHTML= "You need to Vote"
	}
}

function cancelOut()
{
	const ca= document.getElementById("cancel")

	if(userCycle== cycleCount)
	{
		ca.innerHTML= "Voted: "+ candidates[votedFor].candName
	}
	else
	{
		ca.innerHTML= "Vote for someone"
	}
}

async function cancelVote()
{
	contract.methods.cancelVote().send({from:account})
}