require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("hardhat-deploy");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
  },
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    users: {
      default: 1,
    },
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
