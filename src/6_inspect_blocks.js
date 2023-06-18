const ethers = require("ethers");

const provider = new ethers.JsonRpcProvider(
  "https://arb-mainnet.g.alchemy.com/v2/dK2aKkHkOMz2gnIO3rWY9nJBYpkXdJZI"
);

async function main() {
  // get latest block
  const blockNumber = await provider.getBlockNumber();

  console.log("Block number: ", blockNumber);

  const blockInfo = await provider.getBlock(blockNumber);

  //console.log("Block info: ", blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(blockNumber);

  console.log("Block with transactions: ", transactions);
}

main();
