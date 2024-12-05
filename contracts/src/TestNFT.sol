// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TestNFT is ERC721 {
    uint256 public nextTokenId;

    constructor() ERC721("TestNFT", "TST") {}

    function mint() external {
        _mint(msg.sender, nextTokenId);
        nextTokenId++;
    }
}
