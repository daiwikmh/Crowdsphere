import React from "react";
import { Routes, Route } from "react-router-dom";
import { CampaignDetails, CreateCampaign, Profile, Home } from "./pages";
import { Sidebar, Navbar } from "./components";

export function App(): JSX.Element {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto am:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign-details" element={<CampaignDetails />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
