import React from "react";
import { Routes, Route } from "react-router-dom";
import { CampaignDetails, CreateCampaign, Profile, Home } from "./pages";
import { Sidebar, Navbar } from "./components";

const App: React.FC = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] text-white min-h-screen flex flex-row">
      {/* Sidebar */}
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
         </Routes>
      </div>
    </div>
  );
};

export default App;
