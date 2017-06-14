export const DSCL_CONTRACT_HASH = '0xA0A9F9A55380D8357C2Cf7095afbADEa10233610';

export const DSCL_CONTRACT_ABI = [[{
	"constant": false,
	"inputs": [{
		"name": "to",
		"type": "address"
	}, {
		"name": "gA",
		"type": "int256"
	}],
	"name": "requestCommunication",
	"outputs": [],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "to",
		"type": "address"
	}, {
		"name": "gB",
		"type": "int256"
	}, {
		"name": "IPFS_ref",
		"type": "string"
	}],
	"name": "respondToRequest",
	"outputs": [],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "to",
		"type": "address"
	}, {
		"name": "IPFS_ref",
		"type": "string"
	}],
	"name": "sendPayload",
	"outputs": [],
	"payable": false,
	"type": "function"
}, {
	"inputs": [],
	"payable": false,
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
			"indexed": false,
			"name": "from",
			"type": "address"
		}, {
			"indexed": false,
			"name": "to",
			"type": "address"
		},
		{
			"indexed": false,
			"name": "IPFS_ref",
			"type": "string"
		}],
	"name": "IPFS_only",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
			"indexed": false,
			"name": "from",
			"type": "address"
		}, {
			"indexed": false,
			"name": "to",
			"type": "address"
		},
		{
			"indexed": false,
			"name": "gB",
			"type": "int256"
		}, {
			"indexed": false,
			"name": "IPFS_ref",
			"type": "string"
		}],
	"name": "diffie_IPFS",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
			"indexed": false,
			"name": "from",
			"type": "address"
		},
		{
			"indexed": false,
			"name": "to",
			"type": "address"
		}, {
			"indexed": false,
			"name": "gA",
			"type": "int256"
		}],
	"name": "diffie_only",
	"type": "event"
}]];
