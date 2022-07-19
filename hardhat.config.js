require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 const { API_URL, PRIVATE_KEY } = process.env;
 module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "goerli",
   networks: {
     goerli: {
       url: "https://eth-goerli.g.alchemy.com/v2/tmacjcMVskiSW_1NFjphZd-CIN7fHHQQ",
       accounts: [PRIVATE_KEY],
     },
   },
   etherscan:{
     apiKey:"H26QWHDW4H2QWHHSVDI2ZDG6H58EKZHXJ7"
   }
   
 };