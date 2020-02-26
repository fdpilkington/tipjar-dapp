pragma solidity >=0.4.22 <0.7.0;
contract TipJar {
    
    mapping (bytes32 => uint) tips;
    
    function send(bytes32 _hash) public payable {
        tips[_hash] = msg.value;
    }
    
    function claim(string memory _id) public {
        bytes32 hash = keccak256(abi.encodePacked(_id));
        if (tips[hash] != 0) {
            msg.sender.transfer(tips[hash]);
            tips[hash] = 0;
        }
    }
    
}