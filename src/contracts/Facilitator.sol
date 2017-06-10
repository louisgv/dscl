pragma solidity ^0.4.11;
contract Facilitator {

    uint public gasToTimeRatio = 5000;

		uint public globalPublicKey = 4294937295;

		struct SessionData {
			bytes32	encryptedIP;
			uint startTimestamp;
			uint sessionMaxReward;

			uint randomFromA;
			uint randomFromB;
		}

		mapping (address => SessionData) public sessionData;

		event SessionInitiated(
			uint globalKey,
			uint randomFromA,
			uint randomFromB,
			bytes data
		);

		event Sent(address from, address to, uint amount);

		/* A will call this to send B a request
		*/
		function requestSession(address _host) {
			
		}

		/* A will call this after receiving B's public secret
		*/
    function initiateSession(address _host){

			// one gas equal 5 seconds or 5000ms
			sessionData[_host].startTimestamp = now;

	    SessionInitiated(
				globalPublicKey,
				sessionData[_host].randomFromA,
				sessionData[_host].randomFromB,
				msg.data
			);
    }

		/* B will call this to receive reward from A
		*/
    function validateSession(){
        /*uint reward = (now - sessionStartTimestamp)/gasToTimeRatio;
        host.transfer(reward);*/
    }
}
