import React from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import PreLoginNavbar from "../components/Navbar/PreLoginNavbar"; // Update the path if necessary
import PostLoginNavbar from "../components/Navbar/PostLoginNavbar";
import Sidebar from "../Sidebar"; // Import Sidebar

const Layout = () => {
  const { user, isSignedIn } = useUser();

  // Wait until the user's sign-in status is determined
  return (
    <div className="layout">
      {isSignedIn ? <PostLoginNavbar user={user} /> : <PreLoginNavbar />}

      <div className="main-container">
        {/* Sidebar is always visible regardless of sign-in status */}
        <Sidebar />

        <main className="main-content">
          {/* Outlet will render the child route's content */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
