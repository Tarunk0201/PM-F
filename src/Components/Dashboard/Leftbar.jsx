import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { FaProjectDiagram, FaTasks, FaFileAlt, FaTachometerAlt, FaSignOutAlt, FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

const Leftbar = ({ role, collapsed, setCollapsed }) => {
  const menuItems = [
    { icon: <FaProjectDiagram size={20} />, label: "Project", path: "/project" },
    { icon: <FaTasks size={20} />, label: "Task", path: "/task" },
    { icon: <FaFileAlt size={20} />, label: "Report", path: "/report" },
    { icon: <FaTachometerAlt size={20} />, label: "Dashboard", path: "/" },
  ];

  if (role === "admin") {
    menuItems.push({ icon: <FaUsers size={20} />, label: "All Members", path: "/members" });
  }

  return (
    <nav
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] ${collapsed ? "w-16 sm:w-20" : "w-16 sm:w-64"
        } bg-[#8647b9] text-white shadow-lg z-50 transition-all duration-300 ease-in-out p-4 `}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* Toggle */}
          <div
            className="flex items-center gap-2 mb-6 text-lg font-sans cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          >
            <IoMenu size={30} />
            {/* {!collapsed && <span>Menu</span>} */}
            {!collapsed && <span className="hidden sm:inline">Menu</span>}
          </div>

          {/* Links */}
          <div className="flex flex-col font-sans gap-4">
            {menuItems.map((item, index) => (
              // <NavLink
              //   key={index}
              //   to={item.path}
              //   className="flex items-center gap-3 px-2 py-2 hover:bg-white hover:text-[#8647b9] rounded transition-all duration-200"
              // >
              //   {item.icon}
              //   {!collapsed && <span className="text-md">{item.label}</span>}
              // </NavLink>
              <NavLink
                key={index}
                to={item.path}
                className="flex items-center gap-3 px-2 py-2 hover:bg-white hover:text-[#8647b9] rounded transition-all duration-200"
              >
                {item.icon}
                <span className={`text-md ${collapsed ? "hidden" : "hidden sm:inline"}`}>
                  {item.label}
                </span>
              </NavLink>

            ))}
          </div>
        </div>

        {/* Bottom: Profile + Logout */}
        <div className="border-t border-white/30 pt-4 mt-4">
          <div className="flex items-center gap-3 px-2 mb-2">
            <CgProfile size={30} />
            {!collapsed && <span className="hidden sm:inline text-md font-sans">Monu Parmar</span>}

          </div>
          <button
            className={`flex items-center justify-center sm:justify-start gap-3 mt-3 py-2 ${collapsed ? "px-0" : "pl-5"
              } hover:bg-gray-200 bg-white text-[#8647b9] rounded w-full transition-all cursor-pointer`}
          >
            <FaSignOutAlt size={collapsed ? 22 : 18} />
            <span className={`${collapsed ? "hidden" : "hidden sm:inline"}`}>Logout</span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Leftbar;
