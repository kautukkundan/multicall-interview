import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { Interview } from "../typechain";

async function deploy() {
  const signer = await ethers.getSigners();

  // deployment
  // write some code

  return { signer: signer[0], interviewInterface: "return interface", interview: "return contract" };
}

async function logSignerBalance(msg: string, signer: SignerWithAddress) {
  // signer wallet balance
  const signerBalance = // write some code;
  console.log({ msg: msg, value: ethers.utils.formatEther(signerBalance) });
}

async function logSignerBid(
  msg: string,
  interview: Interview,
  signer: SignerWithAddress
) {
  const signerBid = // write some code;
  console.log({ msg, value: ethers.utils.formatEther(signerBid) });
}

async function directcall() {
  const { signer, interview } = await deploy();

  // check balance
  await logSignerBalance("initial wallet balance", signer);
  await logSignerBid("bid balance", interview, signer);

  // bid
  console.log("perform bid");
  // write some code

  // check bid balance
  await logSignerBid("bid balance", interview, signer);
  await logSignerBalance("after bid wallet balance", signer);

  // withdraw
  console.log("perform withdraw");
  // write some code

  await logSignerBid("bid balance", interview, signer);
  await logSignerBalance("final wallet balance", signer);
}

async function multicall() {
  const { signer, interview } = await deploy();

  // check balance
  await logSignerBalance("initial wallet balance", signer);
  await logSignerBid("bid balance", interview, signer);

  // using Multicall
  console.log("perform bid");
  // write some code

  // check closing balance
  await logSignerBalance("final wallet balance", signer);
  await logSignerBid("bid balance", interview, signer);
}

async function main() {
  //   await directcall();
  //   await multicall();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
