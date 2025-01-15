import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Campaign {
  id: string;
  title: string;
  description: string;
  [key: string]: any; // Adjust this as needed for additional campaign properties
}

interface DisplayCampaignProps {
  title: string;
  isLoading: boolean;
  campaigns: Campaign[];
}

const DisplayCampaign: React.FC<DisplayCampaignProps> = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1
        className="font-epilogue font-semibold text-2xl text-white text-left"
      >
        {title}
      </h1>
      {/* Render campaigns or loading state here as needed */}
    </div>
  );
};

export default DisplayCampaign;
