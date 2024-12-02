"use client";
import React, { useState } from "react";
import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";

const WorldIDKit = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [tokenId, setTokenId] = useState("");

  const verifyProof = async (proof: any) => {
    try {
      console.log("Verifying proof with NFT data:", proof);

      const response = await fetch("/api/generate-nft-proof", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contractAddress,
          tokenId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate NFT proof");
      }

      const data = await response.json();
      console.log("NFT Proof Generated:", data.proof);
    } catch (error) {
      console.error("Error verifying NFT ownership:", error);
    }
  };

  const onSuccess = () => {
    console.log("Verification successful!");
  };

  return (
    <div>
      <h3>Claim NFT Ownership</h3>
      <input
        type="text"
        placeholder="NFT Contract Address"
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <IDKitWidget
        app_id="app_staging_895bc26455d8263eb12e197032804504"
        action="nft-claim"
        verification_level={VerificationLevel.Device}
        handleVerify={verifyProof}
        onSuccess={onSuccess}
        onError={(error) => {
          console.error("Widget Error:", error);
        }}
      >
        {({ open }) => (
          <button onClick={open}>
            Verify with World ID
          </button>
        )}
      </IDKitWidget>
    </div>
  );
};

export default WorldIDKit;
