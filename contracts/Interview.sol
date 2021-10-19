// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import "./Multicall.sol";

contract Interview is Multicall {
    mapping (address => uint256) public bids;

    function bid() public payable {
        bids[msg.sender] += msg.value;
    }

    function withdrawBid() public {
        uint256 amount = bids[msg.sender];

        bids[msg.sender] = 0;

        msg.sender.transfer(amount);
    }
}