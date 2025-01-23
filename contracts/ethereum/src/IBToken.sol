pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IBToken is ERC20 {
    event TokensBridged(address indexed from, uint256 amount, string direction);
    
    constructor() ERC20("Inter Blockchain Token", "IBT") {}
    
    //MINT
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
        emit TokensBridged(to, amount, "RECEIVED_FROM_SUI");
    }

    //BURN
    function burn(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "IBToken: insufficient balance to burn");
        _burn(msg.sender, amount);
        emit TokensBridged(msg.sender, amount, "SENT_TO_SUI");
    }

    // OVERRIDE
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        require(to != address(0), "IBToken: transfer to zero address");
        require(amount > 0, "IBToken: transfer amount must be greater than zero");
        return super.transfer(to, amount);
    }
}
