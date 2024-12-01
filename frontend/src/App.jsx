import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Layout/MainLayout'; // Import your Layout component
import { Helmet } from 'react-helmet'; // Import react-helmet for SEO
import Home from './pages/Home'; // Import Home directly
import Features from './components/HighLightFeature/Features'; // Import Features

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
          element: <Home />, // Directly use Home component
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
