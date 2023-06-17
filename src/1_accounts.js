const { ethers } = require("ethers");

//make async function so we can use await
async function main() {
  //connect to blockchain node
  const provider = new ethers.JsonRpcProvider(
    "https://arb-mainnet.g.alchemy.com/v2/dK2aKkHkOMz2gnIO3rWY9nJBYpkXdJZI"
  );

  //read from the blockchain
  const balance = await provider.getBalance(
    "0xB8FF877ed78Ba520Ece21B1de7843A8a57cA47Cb"
  );

  console.log(ethers.formatEther(balance));
}

main();
