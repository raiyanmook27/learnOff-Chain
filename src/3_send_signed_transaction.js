const ethers = require("ethers");

const provider = new ethers.JsonRpcProvider(
  "https://arb-goerli.g.alchemy.com/v2/v2OW-2Tu_fcNJ38HHUsk0ygnijD4iqzA"
);

const account1 = "0x5294517806b1a54f931ae5ae770b80c99a4a9950"; //sender
const account2 = "0xe898fa169fe3762aa0e1a447e4f09b80ccd93cf0"; //receiver

const privateKey = "PRIVATE_KEY";

async function main() {
  const balanceBeforeAcc1 = await provider.getBalance(account1);
  //show account balance before transaction
  const balanceBeforeAcc2 = await provider.getBalance(account2);
  //show account balance before transaction

  // we need to connect to the wallet
  const wallet = new ethers.Wallet(privateKey, provider);

  //we need to send a transaction, to send ether to another account
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.parseEther("0.00025"),
  });

  //we need to get the details of the transaction
  //waits for the transaction to be mined
  const details = await tx.wait();
  console.log(details);
  //show account balance after transaction
  const balanceAfterAcc1 = await provider.getBalance(account1);
  //show account balance after transaction
  const balanceAfterAcc2 = await provider.getBalance(account2);

  //log all balances
  console.log(
    "Balance before account 1: ",
    ethers.formatEther(balanceBeforeAcc1)
  );
  console.log(
    "Balance after account 1: ",
    ethers.formatEther(balanceAfterAcc1)
  );
  console.log(
    "Balance before account 2: ",
    ethers.formatEther(balanceBeforeAcc2)
  );
  console.log(
    "Balance after account 2: ",
    ethers.formatEther(balanceAfterAcc2)
  );
}
main();
