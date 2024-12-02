// pages/api/verify.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const proof = req.body;

  try {
    // Simulate verification (replace with your logic)
    console.log("Received proof:", proof);
    // TODO: Add your server-side verification logic here

    res.status(200).json({ success: true, message: "Proof verified successfully!" });
  } catch (error) {
    console.error("Error verifying proof:", error);
    res.status(500).json({ error: "Failed to verify proof" });
  }
}
