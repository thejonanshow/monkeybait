// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Proof} from "dependencies/vlayer-0.1.0-nightly-20241202-164f0bc/src/Proof.sol";
import {Prover} from "dependencies/vlayer-0.1.0-nightly-20241202-164f0bc/src/Prover.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SimpleProver is Prover {
    IERC20 immutable token;
    uint256 immutable blockNo;

    constructor(IERC20 _token, uint256 _blockNo) {
        token = _token;
        blockNo = _blockNo;
    }

    function balance(address _owner) public returns (Proof memory, address, uint256) {
        setBlock(blockNo);
        uint256 ownerBalance = token.balanceOf(_owner);

        return (proof(), _owner, ownerBalance);
    }
}
