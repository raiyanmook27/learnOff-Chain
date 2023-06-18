const ethers = require("ethers");

const provider = new ethers.JsonRpcProvider(
  "https://arb-mainnet.g.alchemy.com/v2/dK2aKkHkOMz2gnIO3rWY9nJBYpkXdJZI"
);
const account1 = "0x5294517806b1a54f931ae5ae770b80c99a4a9950"; //receiver
const account2 = "0xe898fa169fe3762aa0e1a447e4f09b80ccd93cf0"; //sender

const PRIVATE_KEY = "PRIVATE_KEY";

const linkContractAddress = "0xd14838A68E8AFBAdE5efb411d5871ea0011AFd28";

const ERC20ABI = [
  "function transfer(address to, uint amount)",
  "function balanceOf(address account) view returns (uint256)",
];

const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const contract = new ethers.Contract(linkContractAddress, ERC20ABI, provider);

async function main() {
  const tx = await contract
    .connect(wallet)
    .transfer(account1, ethers.parseEther("5"));

  wallet.estimateGas(tx).then((gasEstimate) => {
    console.log("gasEstimate", gasEstimate.toString());
    //say gas price is 0.2 gwai
    const gasPrice = ethers.parseUnits("0.1", "gwei");
    console.log("gasPrice", gasPrice.toString());
    //calculate gas fee
    const gasFee = gasEstimate * gasPrice;
    console.log("gasFee", gasFee.toString());

    //calculate the gas fee in ether
    const gasFeeInEther = ethers.formatEther(gasFee);
    console.log("gasFeeInEther", gasFeeInEther.toString());
  });
}
main();
