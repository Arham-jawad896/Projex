// Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Update the path if necessary

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
