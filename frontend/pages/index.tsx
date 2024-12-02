import Layout from "../components/layout"

import NFTVerifierAbi from "@shared/abis/NFTVerifier.json";
const abi = NFTVerifierAbi.abi;

export default function IndexPage() {
  console.log('World ID Client ID:', process.env.NEXT_PUBLIC_WORLD_ID_CLIENT_ID);
  console.log('World ID Client Secret:', process.env.NEXT_PUBLIC_WORLD_ID_CLIENT_SECRET);
  console.log('Node ENV', process.env.NODE_ENV);
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> with {" "}
        <a href ="https://worldcoin.org/world-id">World ID</a> for authentication.
      </p>
    </Layout>
  )
}
