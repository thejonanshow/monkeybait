// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract NFTProof {
    function generateProof(
        address owner,
        uint256 tokenId,
        uint256 mintBlock
    ) external pure returns (bytes memory) {
        // Stub: Generate proof for Vlayer integration
        return abi.encode(owner, tokenId, mintBlock);
    }
}
