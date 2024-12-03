import { ethers } from "ethers";

const ABI = [
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
];

export async function fetchMintBlock(
  providerUrl: string,
  nftContract: string,
  tokenId: string
): Promise<number> {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const contract = new ethers.Contract(nftContract, ABI, provider);

  const events = await contract.queryFilter(
    contract.filters.Transfer(null, null, tokenId),
    0,
    "latest"
  );

  const mintEvent = events.find(
    (e) => e.args?.from === ethers.constants.AddressZero
  );

  if (!mintEvent) {
    throw new Error("Minting event not found");
  }

  return mintEvent.blockNumber;
}
