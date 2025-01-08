const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const CrowdFunding = await ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deploymentTransaction().wait();

  console.log("CrowdFunding deployed to:", crowdFunding.address);

  const numberOfCampaigns = await crowdFunding.numberOfCampaigns();
  console.log("Initial number of campaigns:", numberOfCampaigns.toString());

  const fs = require('fs');
    fs.writeFileSync(
        './deployedAddress.json',
        
        JSON.stringify({ address: crowdFunding.address }, null, 2)
    );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });
