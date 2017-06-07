pragma solidity ^0.4.11;
contract Facilitator {

    uint public gasToTimeRatio = 5000;

    uint public maximumSessionLength; // In ms

    uint sessionStartTimestamp;

    uint sessionMaxReward;

    event SessionShouldStart(address host, uint sessionLength, bytes data);

    event Sent(address from, address to, uint amount);

    address host;

    function calculateSessionLength(address _host){
        // one gas equal 5 seconds or 5000ms

        sessionStartTimestamp = now;
        host = _host;
        SessionShouldStart(host, maximumSessionLength, msg.data);
    }

    function validateSession(){
        uint reward = (now - sessionStartTimestamp)/gasToTimeRatio;
        host.transfer(reward);
    }
}
