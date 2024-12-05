import React, { useState } from "react";
import { fetchMintBlock } from "../utils/fetchMintBlock";

export default function NFTProof() {
  const [mintBlock, setMintBlock] = useState<number | null>(null);
  const [providerUrl, setProviderUrl] = useState(process.env.ALCHEMY_ETH_SEP_RPC_URL);
  const [nftContract, setNftContract] = useState("0xYourContractAddress");
  const [tokenId, setTokenId] = useState("");

  const handleFetchMintBlock = async () => {
    try {
      // Convert tokenId to a number
      const block = await fetchMintBlock(
        providerUrl,
        nftContract,
        Number(tokenId) // Ensure tokenId is a number
      );
      setMintBlock(block);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <button onClick={handleFetchMintBlock}>Fetch Mint Block</button>
      {mintBlock !== null && <p>Mint Block: {mintBlock}</p>}
    </div>
  );
}
