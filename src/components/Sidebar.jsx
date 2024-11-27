import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFutbol, FaUsers, FaTrophy, FaBars } from 'react-icons/fa';
import logo from '../assets/Logo.png';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to toggle sidebar collapse
  const location = useLocation();

  // Toggle Sidebar Collapse
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Reusable NavItem Component
  const NavItem = ({ Icon, path, label }) => (
    <Link
      to={path}
      className={`flex items-center p-3 rounded-lg transition-colors ${
        location.pathname === path
          ? 'bg-gray-400 text-white'
          : 'hover:bg-gray-200 text-gray-700'
      } ${isCollapsed ? 'justify-center' : ''}`} // Adjust alignment when collapsed
    >
      <Icon className="mr-3 w-6 h-6" /> {/* Icon size */}
      {!isCollapsed && <span className="ml-3">{label}</span>} {/* Only show label when expanded */}
    </Link>
  );

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20 p-2' : 'w-64 p-6' // Adjust width and padding based on collapsed state
      } bg-gray-300 border-r hidden md:block relative shadow-md transition-all duration-300 ease-in-out`}
    >
      {/* Collapse Button */}
     

      {/* Logo Section */}
      <div className="mb-10 flex items-center justify-center">
        {/* Hide Logo when Collapsed */}
        {!isCollapsed && (
          <div className="flex items-center justify-between w-full space-x-3">
            <div className="h-12 bg-black rounded-full w-12 flex justify-center items-center">
              <img src={logo} className="h-12 w-12" alt="Logo" />
            </div>
            <button
        onClick={toggleSidebar}
        className="bg-gray-400 text-white rounded-full p-2 shadow-md focus:outline-none z-10"
      >
        <FaBars className="w-6 h-6" />
      </button>
          </div>
        )}
      </div>

      {/* Navigation Section */}
      <nav className="space-y-2">
        <NavItem Icon={FaHome} path="/" label="Dashboard" />
        <NavItem Icon={FaFutbol} path="/matches" label="Matches" />
        <NavItem Icon={FaUsers} path="/teams" label="Teams" />
        <NavItem Icon={FaTrophy} path="/players" label="Players" />
        <NavItem Icon={FaTrophy} path="/line-up" label="line-up" />
      </nav>
    </aside>
  );
};

export default Sidebar;
