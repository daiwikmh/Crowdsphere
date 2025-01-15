import React, { useContext, createContext, ReactNode } from 'react';
import { useAddress, useContract, metamaskWallet, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { BigNumber } from "ethers";

interface Campaign {
  id: string; 
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: number;
  amountCollected: string;
  image: string;
  pId: number;
}



interface FormData {
  name: string;
  title: string;
  description: string;
  target: BigNumber;
  deadline: string;
  image: string;
}

interface StateContextType {
  address: string | undefined;
  contract: any; // You can specify the contract type if available
  connect: ReturnType<typeof metamaskWallet>;
  createCampaign: (form: FormData) => Promise<void>;
  getCampaigns:  () => Promise<Campaign[]>;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface StateContextProviderProps {
  children: ReactNode;
}

export const StateContextProvider = ({ children }: StateContextProviderProps) => {
  const { contract } = useContract('0xA22E754485D37EbC662141d06fEf3119ddd9Ec53');
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

  const address = useAddress();
  const connect = metamaskWallet();

  const publishCampaign = async (form: FormData) => {
    try {
      const data = await createCampaign({
        args: [
          form.title, 
          form.description, 
          form.target,
          new Date(form.deadline).getTime(), 
          form.image,
        ],
      });

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract?.call('getCampaigns');
  
    const parsedCampaigns = campaigns.map((campaign: any, i:number) =>({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther
      (campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i

    }));
    return parsedCampaigns;
  }

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a StateContextProvider');
  }
  return context;
};
