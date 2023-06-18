const ethers = require("ethers");

const output = require("../bin/src/contracts/Adder.json");
const ABI = output.abi;
const bytecode = output.bytecode;

const provider = new ethers.JsonRpcProvider(
  "https://arb-mainnet.g.alchemy.com/v2/dK2aKkHkOMz2gnIO3rWY9nJBYpkXdJZI"
);

const PRIVATE_KEY =
  "9d88d0681b992e07459d6c048eee3016cf9fc973fb6eac637683acfe005d76b4";

//get contract bytecode
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

async function main() {
  const Addfactory = new ethers.ContractFactory(ABI, bytecode, wallet);
  const deployedContract = await Addfactory.deploy();

  const details = await deployedContract.waitForDeployment();

  console.log("Contract deployed to: ", await deployedContract.getAddress());

  const tx = await deployedContract.connect(wallet).add(2, 10);

  const gasEstimates = await deployedContract
    .connect(wallet)
    .add.estimateGas(2, 10);
  //convert to big number
  const gasEstimatesBigNumber = ethers.getBigInt(gasEstimates);
  console.log("Gas estimates: ", gasEstimatesBigNumber.toString());

  const result = ethers.getBigInt(tx);
  console.log("Transaction result: ", result.toString());
}

main();
