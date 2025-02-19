import React, { useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import dashboardConfig from "./dashboardConfig";

const Sidebar = React.memo(() => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Memoizing the dashboard to avoid recomputing on every render
  const currentDashboard = useMemo(() => {
    return dashboardConfig.find((config) =>
      location.pathname.startsWith(config.path),
    );
  }, [location.pathname]);

  if (!currentDashboard) return null; // Only render if the current path matches a dashboard

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Hamburger Button for Mobile */}
      <button
        className="lg:hidden p-4 text-white hover:bg-white/10 transition-colors duration-200"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M3 12h18M3 6h18M3 18h18"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`lg:w-72 min-h-screen bg-[#1A1F2B]/95 backdrop-blur-sm p-5 border-r border-[#2C3142] mt-[73px] fixed top-0 left-0 transition-all duration-300 ease-in-out flex flex-col justify-between z-20 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col flex-grow gap-6">
          {/* Sidebar items */}
          {currentDashboard.sidebar.length > 0 ? (
            currentDashboard.sidebar.map((sidebarItem) => {
              const isActive = location.pathname.startsWith(
                `${currentDashboard.path}/${sidebarItem.path}`,
              );
              return (
                <div
                  key={sidebarItem.path}
                  className="transition-all duration-200 w-full"
                >
                  <Link
                    to={`${currentDashboard.path}/${sidebarItem.path}`}
                    className={`bg-[#2C3142]/50 hover:bg-white/5 p-4 flex items-center gap-4 group font-medium rounded-lg text-white transition-all duration-200 w-full justify-start ${isActive ? "bg-white/10 border-l-2 border-purple-400" : ""}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className={`w-6 h-6 group-hover:scale-110 transition-transform duration-200 ${isActive ? "text-purple-400" : "text-gray-400"}`}
                    >
                      <path
                        fill="currentColor"
                        d="M17.2929 14.2929C16.9024 14.6834 16.9024 15.3166 17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071L21.6201 12.7941C21.6351 12.7791 21.6497 12.7637 21.6637 12.748C21.87 12.5648 22 12.2976 22 12C22 11.7024 21.87 11.4352 21.6637 11.252C21.6497 11.2363 21.6351 11.2209 21.6201 11.2059L18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289C16.9024 8.68342 16.9024 9.31658 17.2929 9.70711L18.5858 11H13C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13H18.5858L17.2929 14.2929Z"
                      />
                    </svg>
                    <span
                      className={`whitespace-nowrap ${isActive ? "text-white" : "text-gray-400"} group-hover:text-white transition-colors duration-200`}
                    >
                      {sidebarItem.title}
                    </span>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="flex-grow flex justify-center items-center text-gray-400">
              No items available.
            </div>
          )}
        </div>

        {/* Optional Footer (If needed) */}
        <div className="pt-5 text-center text-gray-400 text-sm">
          {/* You can add footer content here */}
        </div>
      </div>

      {/* Backdrop for Mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out z-10 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleSidebar}
      />
    </div>
  );
});

export default Sidebar;
