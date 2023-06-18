const ethers = require("ethers");

async function main() {
  const hashMessage = ethers.hashMessage("Hello World");
  console.log(hashMessage);
}
main();
