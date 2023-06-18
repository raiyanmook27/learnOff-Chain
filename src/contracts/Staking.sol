//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

//add 2 numbers

contract Adder {
    function add(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 + nb2;
    }

    function sub(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 - nb2;
    }
}
