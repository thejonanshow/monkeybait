import React, { useState } from "react";
import { fetchMintBlock } from "../utils/fetchMintBlock";

export default function NFTProof() {
  const [mintBlock, setMintBlock] = useState<number | null>(null);

  const handleFetch = async () => {
    const providerUrl = "<YOUR_PROVIDER_URL>";
    const nftContract = "<NFT_CONTRACT_ADDRESS>";
    const tokenId = "1";

    try {
      const block = await fetchMintBlock(providerUrl, nftContract, tokenId);
      setMintBlock(block);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={handleFetch}>Fetch Mint Block</button>
      {mintBlock && <p>Mint Block: {mintBlock}</p>}
    </div>
  );
}
