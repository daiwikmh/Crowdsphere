import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './../crowdlogo.png';

interface IconProps {
  styles: string;
  name?: string;
  imgurl?: string;
  isActive?: string;
  disabled?: boolean;
  handleClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  styles,
  name,
  imgurl,
  isActive,
  disabled,
  handleClick,
}) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive === name ? "bg-[#2c2f32]" : ""
    } flex justify-center items-center ${
      disabled ? "cursor-pointer" : ""
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={logo} alt="logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgurl}
        alt={name || "icon"}
        className={`w-1/2 h-1/2 ${isActive !== name ? "grayscale" : ""}`}
      />
    )}
  </div>
);

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<string>("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon
          styles="w-[52px] h-[52px] bg-[#2c2f32]"
          imgurl={logo}
          name="home"
        />
      </Link>
      <div className="sidebar-content">Sidebar</div>
    </div>
  );
};

export default Sidebar;
