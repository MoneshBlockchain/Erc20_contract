// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function main() {


  const MosoToken = await hre.ethers.getContractFactory("MosoToken");
  const mosotoken = await MosoToken.deploy();

  await mosotoken.deployed();

  console.log("ERC20 contract deploy to address:", mosotoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//contract address 0xf70a6bD146Db9B03440c6fe863C3C0844D2A8A46
