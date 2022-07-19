//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MosoToken is ERC20 {
    uint constant _initial_supply = 100000 * (10**9);
    constructor() ERC20("Moso", "ms") {
        _mint(msg.sender, _initial_supply);
    }
}