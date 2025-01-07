// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

contract CrowdFunding {

    struct Campaign {
        address owner;
        string title;
        string description;
        uint target;
        uint deadline;
        uint balances;
        string image;
        address[] donators;
        uint[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public numberOfCampaigns = 0;

    function createCampaign(
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        require(_deadline > block.timestamp, "The deadline must be in the future");

        Campaign storage campaign = campaigns[numberOfCampaigns];
        campaign.owner = msg.sender; // Set the owner to the sender
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.balances = 0;
        campaign.image = _image;

        numberOfCampaigns++;
        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint amount = msg.value;
        Campaign storage campaign = campaigns[_id];

        require(campaign.owner != address(0), "Campaign does not exist");
        require(block.timestamp < campaign.deadline, "Campaign has ended");
        require(campaign.balances + amount <= campaign.target, "Target amount exceeded");

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        
        (bool sent, ) = payable(campaign.owner).call{value: amount}("");
        require(sent, "Failed to send Ether");

        campaign.balances += amount; // Corrected from 'balances' to 'amount'
    }

    function getDonators(uint256 _id) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }


    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for (uint i = 0; i < numberOfCampaigns; i++) {
            allCampaigns[i] = campaigns[i];
        }

        return allCampaigns; 
    }
}