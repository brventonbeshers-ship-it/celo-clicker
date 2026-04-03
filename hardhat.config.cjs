require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    celo: {
      url: "https://forno.celo.org",
      chainId: 42220,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: { celo: process.env.CELOSCAN_API_KEY || "" },
    customChains: [
      {
        network: "celo",
        chainId: 42220,
        urls: {
          apiURL: "https://api.celoscan.io/api",
          browserURL: "https://celoscan.io",
        },
      },
    ],
  },
};
