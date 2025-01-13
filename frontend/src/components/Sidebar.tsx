import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUserCircle, FaMoneyCheckAlt, FaSignOutAlt } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import logo from './../crowdlogo.png';
import { MdLightMode } from "react-icons/md";


const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<string>("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      {/* Logo */}
      <Link to="/">
        <div className="w-[52px] h-[52px] bg-[#2c2f32] flex justify-center items-center rounded-[10px]">
        <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col justify-between rounded-[20px] items-center bg-[#1c1c24] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <div
            className={`w-[48px] h-[48px] rounded-[10px] flex justify-center items-center ${
              isActive === "dashboard" ? "bg-[#2c2f32]" : ""
            }`}
            onClick={() => {
              setIsActive("dashboard");
              navigate("/");
            }}
          >
            <RxDashboard
              size={24}
              color={isActive === "dashboard" ? "#fff" : "#aaa"}
            />
          </div>

          <div
            className={`w-[48px] h-[48px] rounded-[10px] flex justify-center items-center ${
              isActive === "campaign" ? "bg-[#2c2f32]" : ""
            }`}
            onClick={() => {
              setIsActive("campaign");
              navigate("/create-campaign");
            }}
          >
            <RiSendPlaneLine
              size={24}
              color={isActive === "campaign" ? "#fff" : "#aaa"}
            />
          </div>

          <div
            className="w-[48px] h-[48px] rounded-[10px] flex justify-center items-center opacity-50 cursor-not-allowed"
          >
            <FaMoneyCheckAlt size={24} color="#aaa" />
          </div>

          <div
            className={`w-[48px] h-[48px] rounded-[10px] flex justify-center items-center ${
              isActive === "profile" ? "bg-[#2c2f32]" : ""
            }`}
            onClick={() => {
              setIsActive("profile");
              navigate("/profile");
            }}
          >
            <FaUserCircle
              size={24}
              color={isActive === "profile" ? "#fff" : "#aaa"}
            />
          </div>

          <div
            className="w-[48px] h-[48px] rounded-[10px] flex justify-center items-center opacity-50 cursor-not-allowed"
          >
            <FaSignOutAlt size={24} color="#aaa" />
          </div>
        </div>
        <div
            className="w-[48px] h-[48px] rounded-[10px] flex justify-center items-center opacity-50 cursor-not-allowed"
          >
            <MdLightMode size={24} color="#aaa" />
          </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
