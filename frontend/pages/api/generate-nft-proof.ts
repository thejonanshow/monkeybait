import { NextApiRequest, NextApiResponse } from "next";
import { Prover } from "@vlayer/sdk";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { contractAddress, tokenId } = req.body;

  if (!contractAddress || !tokenId) {
    return res.status(400).json({ error: "Missing contractAddress or tokenId" });
  }

  try {
    // Initialize vlayer Prover
    const prover = new Prover({
      network: "testnet", // Use 'mainnet' when going live
    });

    // Generate proof for NFT ownership
    const proof = await prover.generateProof({
      contractAddress,
      tokenId,
    });

    // Return the proof to the frontend
    res.status(200).json({ success: true, proof });
  } catch (error) {
    console.error("Error generating NFT proof:", error);
    res.status(500).json({ error: "Failed to generate proof" });
  }
}
