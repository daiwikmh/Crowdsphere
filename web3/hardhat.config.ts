require("dotenv").config({ path: ".env" });
import "@nomicfoundation/hardhat-toolbox";

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "telos_testnet",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    telos_testnet: {
      url: "https://lb.drpc.org/ogrpc?network=telos-testnet&dkey=ArRpveCLMEDGtoYvRuiHUtd5CTOhzPwR77OzIlZWwHzR",
      accounts: [process.env.TELOS_TESTNET_PRIVATE_KEY],
      chainId: 41,
    },
  },
};
