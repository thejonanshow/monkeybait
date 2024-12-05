import { ethers } from "ethers";

/**
 * Fetches the mint block number for a specific NFT.
 * @param provider - An ethers.js provider instance.
 * @param contractAddress - The address of the NFT contract.
 * @param tokenId - The ID of the NFT.
 * @returns The block number where the NFT was minted.
 */
export async function fetchMintBlock(
  provider: ethers.providers.Provider,
  contractAddress: string,
  tokenId: number
): Promise<number> {
  const contractAbi = [
    // Add the specific ABI fragment needed to interact with your contract.
    "function getMintBlock(uint256 tokenId) view returns (uint256)",
  ];
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  const mintBlock = await contract.getMintBlock(tokenId);
  return mintBlock.toNumber();
}
