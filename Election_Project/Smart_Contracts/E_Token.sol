// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract E_Token is ERC20, ERC20Burnable, Ownable, Pausable {  

    constructor() ERC20("ElectionToken", "ET") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    //onlyOwner functions
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    //all functions
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal whenNotPaused override(ERC20) {
        super._beforeTokenTransfer(from, to, amount);
    }

    function _transfer(address sender, address recipient, uint256 amount) internal virtual override(ERC20) whenNotPaused {
        {
            super._transfer(sender, recipient, amount);
        }
    }
}