import { RxDashboard } from "react-icons/rx";
import { FaUserCircle, FaMoneyCheckAlt, FaSignOutAlt } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { ReactNode } from "react";

interface NavLink {
  name: string;
  icon: React.ComponentType;  
  disabled?: boolean;
}

export const navlinks: NavLink[] = [
  {
    name: "dashboard",
    icon: <RxDashboard />,
    link: "/",
  },
  {
    name: "campaign",
    icon: <RiSendPlaneLine />,
    link: "/create-campaign",
  },
  {
    name: "payment",
    icon: <FaMoneyCheckAlt />,
    link: "/",
    disabled: true,
  },
  {
    name: "withdraw",
    icon: <FaMoneyCheckAlt />,
    link: "/",
    disabled: true,
  },
  {
    name: "profile",
    icon: <FaUserCircle />,
    link: "/profile",
  },
  {
    name: "logout",
    icon: <FaSignOutAlt />,
    link: "/",
    disabled: true,
  },
];
