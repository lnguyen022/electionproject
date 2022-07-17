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
let _candidateCount
let cycleCount
let voterCount
let winner
let phase // SetUp= 1, voting= 2, result= 3
let candidates= []
let owner
let contractFunds

function init()
{
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

		account= _account
		contract= _contract
		token= _token
		let _owner= await contract.methods.owner().call()
		.then((response)=> {
			owner= response.toLowerCase()
		})

		token.methods.approve(contractAddress, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({from:account})

		if(account!= owner)
		{
			let display= document.getElementById('cnt-wallet')
				display.style.backgroundColor= "red"
				display.innerHTML= "Not Admin"
				display.onclick= ""
		}
		else
		{
			init()
		}
}

async function updateData()
{
    candidateCount= await contract.methods.candidateCount().call()
	_candidateCount= candidateCount
    cycleCount= await contract.methods.cycleCount().call()
    voterCount= await contract.methods.voterCount().call()
    let temp= await contract.methods.getPhase().call()
	candidates = []
	let _contractFunds= await token.methods.balanceOf(contractAddress).call()
	contractFunds= _contractFunds/(10**18)

    for(let i= 0; i<candidateCount; i++)
    {
        const candidate= await contract.methods.totalCandidate(i).call()
        candidates[i]= candidate
    }

    if(temp== 1)
    {
        phase= "Set Up"
    }
    if(temp== 2)
    {
        phase= "Voting"

    }
    if(temp== 3)
    {
        phase= "Results"
    }

	draw()
}

function updateFE()
{
	const div= document.getElementById('phases')
	const table= document.getElementById('table-body')

	table.innerHTML= ""

	div.innerHTML=`
		Phase: ${phase}
		<br>Cycle: ${cycleCount}
		<br>Voters: ${voterCount}
		<br>CandidateCount: ${candidateCount}
		<br>Contract Funds: ${contractFunds} ET
	`

	if(phase== "Set Up")
	{
		for(let i=0; i<candidateCount; i++)
		{
			var row= `
			<tr>
			<td>${candidates[i].candID}</td>
			<td><input type= "text" id= "inp-cand${candidates[i].candID}" placeholder="Name" name="candInfo[]" value="${candidates[i].candName}"></td>
			<td>${candidates[i].votes}</td>
			</tr>
			`
			table.innerHTML+=row
		}
	}
	if(phase== "Voting")
	{
		for(let i=0; i<candidateCount; i++)
		{
			var row= `
			<tr>
			<td>${candidates[i].candID}</td>
			<td>${candidates[i].candName}</td>
			<td>${candidates[i].votes}</td>
			</tr>
			`
			table.innerHTML+=row
		}
	}
	if(phase== "Results")
	{
		for(let i=0; i<candidateCount; i++)
		{
			var row= `
			<tr>
			<td>${candidates[i].candID}</td>
			<td>${candidates[i].candName}</td>
			<td>${candidates[i].votes}</td>
			</tr>
			`
			table.innerHTML+=row
		}
	}
}

async function saveChanges()
{
	const data= document.getElementsByName('candInfo[]')
	let temp=[]

	for(let i= 0; i<_candidateCount; i++)
	{
		temp[i]=data[i].value
	}

	 contract.methods.addCandidate(temp).send({from:account})

}

function addCand()
{
	const table= document.getElementById('table-body')
	_candidateCount++

	var row= `
	<tr>
		<td>${_candidateCount}</td>
		<td><input type= "text" id= "inp-cand${_candidateCount}" placeholder="Name" name="candInfo[]"></td>
		<td>0</td>
	</tr>
	`
	table.innerHTML+=row
}

function refresh()
{
	updateData()
}

async function addFunds()
{
	const button= document.getElementById('inp-addfunds')
	const funds= button.value

	contract.methods.addFunds(funds).send({from:account})
}

async function changePhase()
{
	contract.methods.changePhase().send({from:account})
}

async function withdraw()
{
	contract.methods.withdrawFunds().send({from:account})
}

function draw()
{
	const body=document.body

	body.innerHTML= ''

	if(phase=="Set Up")
	{
		body.innerHTML= `
		<div>
			<h1>Election Admin Panel</h1>

			<div id="phases" class="div1">
				Phase:
				<br>Cycle:
				<br>Voters:
				<br>CandidateCount:
			</div>

			<h2 id="lbl-wallet"></h2>

			<button id="btn-addcandidate" onclick=addCand()>Add Candidate</button>
			<button id="btn-refresh" onclick=refresh()>Refresh Data</button>

			<table class="table">
				<tr class="table-info">
					<th>Candidate ID#</th>
					<th>Candidate Name</th>
					<th>Votes</th>
				</tr>
				<tbody id="table-body">
					<tr>
						<td>1</td>
						<td><input type= "text" id= "test1" placeholder="name" value="Test"></td>
						<td>0</td>
					</tr>
				</tbody>
			</table>

			<h3 id="btn-update" onclick= saveChanges()>Save Changes</h3>

			<table id="admintable">
				<tr>
					<td>
					<button id="btn-addfunds" onclick=addFunds()>Add Funds</button> <br>
					<button id="btn-withdraw">Withdraw All</button>
					</td>
					<td>
						<label>Amount:</label> <br>
						<input type= "text" id= "inp-addfunds" placeholder="ET" value="">
					</td>
				</tr>
			</table>

			<h3 id="btn-beginVote" onclick= changePhase()>Begin Voting</h3>

		</div>`

		const lbl= document.getElementById('lbl-wallet')
			lbl.classList.add("show")
			lbl.innerHTML= "Connected: " + account

		updateFE()
	}
	if(phase== "Voting")
	{
		body.innerHTML= `
		<div>
			<h1>Election Admin Panel</h1>

			<div id="phases" class="div1">
				Phase:
				<br>Cycle:
				<br>Voters:
				<br>CandidateCount:
			</div>

			<h2 id="lbl-wallet"></h2>

			<button id="btn-refresh" onclick=refresh()>Refresh Data</button>

			<table class="table">
				<tr class="table-info">
					<th>Candidate ID#</th>
					<th>Candidate Name</th>
					<th>Votes</th>
				</tr>
				<tbody id="table-body">
					<tr>
						<td>1</td>
						<td><input type= "text" id= "test1" placeholder="name" value="Test"></td>
						<td>0</td>
					</tr>
				</tbody>
			</table>

			<h3 id="btn-endVote" onclick=changePhase()>End Vote</h3>

			</div>
			`

			const lbl= document.getElementById('lbl-wallet')
			lbl.classList.add("show")
			lbl.innerHTML= "Connected: " + account

			const btn= document.getElementById('btn-endVote')
			btn.style.backgroundColor= "red"

		updateFE()
	}
	if(phase== "Results")
	{
		body.innerHTML= `
		<div>
			<h1>Election Admin Panel</h1>

			<div id="phases" class="div1">
				Phase:
				<br>Cycle:
				<br>Voters:
				<br>CandidateCount:
			</div>

			<h2 id="lbl-wallet"></h2>

			<button id="btn-refresh" onclick=refresh()>Refresh Data</button>

			<table class="table">
				<tr class="table-info">
					<th>Candidate ID#</th>
					<th>Candidate Name</th>
					<th>Votes</th>
				</tr>
				<tbody id="table-body">
					<tr>
						<td>1</td>
						<td><input type= "text" id= "test1" placeholder="name" value="Test"></td>
						<td>0</td>
					</tr>
				</tbody>
			</table>

			<h3 id="btn-setUpVote" onclick=changePhase()>Set Up Vote</h3>

			</div>
			`

			const lbl= document.getElementById('lbl-wallet')
			lbl.classList.add("show")
			lbl.innerHTML= "Connected: " + account

			const btn= document.getElementById('btn-setUpVote')
			btn.style.backgroundColor= 'orange'

		updateFE()
	}
}