const ethers = require("ethers");

async function main() {
  const hashMessage = ethers.hashMessage("Hello World");
  console.log(hashMessage);

  const getBytesMessage = ethers.id("Hello World");
  console.log(getBytesMessage);

  const keccak256Message = ethers.keccak256(getBytesMessage);
  console.log(keccak256Message);
}
main();
