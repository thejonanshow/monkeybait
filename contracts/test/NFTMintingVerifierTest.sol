// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "forge-std/Test.sol";
import "../src/NFTMintingVerifier.sol";

contract NFTMintingVerifierTest is Test {
    NFTMintingVerifier verifier;

    function setUp() public {
        verifier = new NFTMintingVerifier();
    }

    function testVerifyMinting() public {
        address nftContract = address(0x123); // Mock NFT Contract
        uint256 tokenId = 1;
        uint256 mintBlock = block.number - 10;

        bytes memory proof = abi.encodePacked("mock-proof");

        bool isVerified = verifier.verifyMinting(nftContract, tokenId, mintBlock, proof);
        assertTrue(isVerified);
    }
}
