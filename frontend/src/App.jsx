import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';  // Import Suspense and lazy
import './index.css';
import { Helmet } from 'react-helmet'; // Import react-helmet for SEO
import Layout from './Layout/MainLayout'; // Layout component

// Lazy load Home component and other heavy components
const Home = lazy(() => import('./pages/Home')); // Lazy load Home component

// Main App component
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Helmet>
            <title>Projex - Advanced Project Management Tool</title>
            <meta
              name="description"
              content="Projex is the most advanced project management tool that brings unparalleled features to help teams manage, collaborate, and execute projects like never before."
            />
            <meta
              name="keywords"
              content="project management, AI, collaboration, forecasting, automation"
            />
            <meta name="author" content="Arham, Projex Team" />
          </Helmet>
          {/* Layout-specific content (Navbar, etc.) */}
        </Layout>
      ),
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<div>Loading...</div>}>  {/* Suspense for lazy-loaded component */}
              <Home />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
