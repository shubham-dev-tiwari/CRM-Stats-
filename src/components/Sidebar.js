import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"; // Import the AiOutlineMenu icon
import { HomeIcon, StatsIcon, SettingsIcon, LogoutIcon } from "./CustomIcons"; // Import custom SVG icons
import { Tooltip } from "react-tooltip"; // Import Tooltip from react-tooltip

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`bg-gradient-to-b from-blue-950 to-blue-800 p-4 ${
        isCollapsed ? "w-20" : "w-64"
      } h-[1300px] transition-all duration-300 flex flex-col items-start`}
    >
      {/* Sidebar Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="bg-yellow-600 p-2 rounded-full mb-6 self-end transition-all duration-300 hover:bg-yellow-500"
      >
        <AiOutlineMenu className="text-white" />
      </button>

      {/* Navigation Links */}
      <div className="flex flex-col flex-grow space-y-2 w-full">
        <SidebarLink
          href="/"
          icon={<HomeIcon />}
          label="Overview"
          isCollapsed={isCollapsed}
        />
        <SidebarLink
          href="/stats"
          icon={<StatsIcon />}
          label="Stats"
          isCollapsed={isCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={<SettingsIcon />}
          label="Settings"
          isCollapsed={isCollapsed}
        />
        <SidebarLink
          href="/logout"
          icon={<LogoutIcon />}
          label="Logout"
          isCollapsed={isCollapsed}
          isLast // Special styling for the last link
        />
      </div>
    </div>
  );
};

const SidebarLink = ({ href, icon, label, isCollapsed, isLast }) => {
  return (
    <a
      href={href}
      className={`flex items-center p-3 text-white hover:bg-yellow-700 rounded-lg transition-all duration-300 ${
        isLast ? "mt-auto" : ""
      } ${isCollapsed ? "justify-center" : ""}`}
    >
      <div className="tooltip-wrapper">
        {icon}
        {isCollapsed && (
          <Tooltip className="bg-gray-800 text-white p-1 rounded" content={label} />
        )}
      </div>
      {!isCollapsed && (
        <span className="ml-3 text-sm font-medium">{label}</span>
      )}
    </a>
  );
};

export default Sidebar;
