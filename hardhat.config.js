
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");
require("./task/task")
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */


const PRIVATE_KEY = process.env.PRIVATE_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_APIKEY = process.env.COINMARKETCAP_APIKEY

module.exports = {
  defaultNetwork : 'hardhat',
  networks:{
    goerli :{
      url : GOERLI_RPC_URL,
      accounts : [PRIVATE_KEY],
      chainId : 5,
    },
    localhost :{
      url : "http://127.0.0.1:8545/",
      // ACCOUNTs - No Thankss
      chainId : 31337,

    }

  },
  solidity: "0.8.17",
  etherscan : {
    apiKey : ETHERSCAN_API_KEY,
  },
  gasReporter : {
    enabled : true,
    outputFile : "gas-report.text",
    noColors : true,
    currency : "USD" ,
    coinmarketcap : COINMARKETCAP_APIKEY,
    token : 'MATIC',
  }
};
