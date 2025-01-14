import React, { useContext, createContext, ReactNode } from 'react';
import { useAddress, useContract, metamaskWallet, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

interface FormData {
  title: string;
  description: string;
  target: string;
  deadline: string;
  image: string;
}

interface StateContextType {
  address: string | undefined;
  contract: any; // You can specify the contract type if available
  connect: ReturnType<typeof metamaskWallet>;
  createCampaign: (form: FormData) => Promise<void>;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface StateContextProviderProps {
  children: ReactNode;
}

export const StateContextProvider = ({ children }: StateContextProviderProps) => {
  const { contract } = useContract('0xf59A1f8251864e1c5a6bD64020e3569be27e6AA9');
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

  const address = useAddress();
  const connect = metamaskWallet();

  const publishCampaign = async (form: FormData) => {
    try {
      const data = await createCampaign({
        args: [
          address, // owner
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

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
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
