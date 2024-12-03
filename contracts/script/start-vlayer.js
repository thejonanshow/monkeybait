require("dotenv").config();
const { exec } = require("child_process");

const alchemyKey = process.env.ALCHEMY_KEY;

if (!alchemyKey) {
  console.error("Error: ALCHEMY_KEY not found in .env");
  process.exit(1);
}

const command = `
  vlayer serve \
  --rpc-url '31337:http://localhost:8545' \
  --rpc-url '11155111:https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}' \
  --rpc-url '1:https://eth-mainnet.g.alchemy.com/v2/${alchemyKey}' \
  --rpc-url '8453:https://base-mainnet.g.alchemy.com/v2/${alchemyKey}' \
  --rpc-url '10:https://opt-mainnet.g.alchemy.com/v2/${alchemyKey}'
`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting Vlayer: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Vlayer STDERR: ${stderr}`);
    return;
  }
  console.log(`Vlayer STDOUT:\n${stdout}`);
});
