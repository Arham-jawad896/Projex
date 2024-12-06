import React from 'react';
import { Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import PreLoginNavbar from '../components/Navbar/PreLoginNavbar'; // Update the path if necessary
import PostLoginNavbar from '../components/Navbar/PostLoginNavbar'; // Update the path if necessary

const Layout = () => {
  const { user, isSignedIn } = useUser();

  // Wait until the user's sign-in status is determined
  return (
    <div>
      {isSignedIn ? <PostLoginNavbar user={user} /> : <PreLoginNavbar />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
