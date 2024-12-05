import { useState, useEffect } from "react";
import Layout from "../components/layout";
import NFTVerifierAbi from "../abis/NFTVerifier.json";
import { ethers } from "ethers";

const abi = NFTVerifierAbi.abi;

export default function IndexPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedAddress = localStorage.getItem("walletAddress");
      if (storedAddress) {
        setWalletAddress(storedAddress);
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    if (!window.ethereum) {
      alert("MetaMask is required to login.");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      setIsLoggedIn(true);
      localStorage.setItem("walletAddress", address);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleGenerateProof = async () => {
    console.log("Proof generation initiated.");
    // Placeholder for proof generation logic. Replace this with your implementation.
    alert("Proof generation started. Logic needs to be implemented.");
  };

  return (
    <Layout>
      <h1>Monkeybait DApp</h1>
      <p>Use World ID to prove ownership of your NFT and claim rewards.</p>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login with World ID</button>
      ) : (
        <div>
          <p>Welcome, {walletAddress}</p>
          <button onClick={handleGenerateProof}>Generate Proof</button>
        </div>
      )}
    </Layout>
  );
}
