import { createBrowserRouter, RouterProvider, NavLink } from 'react-router-dom';
import { Suspense, lazy, useMemo } from 'react';
import './index.css';
import { Helmet } from 'react-helmet';
import Layout from './Layout/MainLayout';
import dashboardConfig from './dashboardConfig';
import DynamicComponent from './DynamicComponent';
import { DndProvider } from 'react-dnd'; // Import DndProvider
import { HTML5Backend } from 'react-dnd-html5-backend'; // Import HTML5Backend for the drag and drop context

const Home = lazy(() => import('./pages/Home')); // Lazy load Home page

const App = () => {
  // Memoize the route generation to prevent re-calculations
  const routes = useMemo(() => {
    return dashboardConfig.map(({ key, path, sidebar }) => ({
      path,
      element: (
        <Layout>
          <Helmet>
            <title>{`Projex - ${key} Dashboard`}</title>
            <meta
              name="description"
              content={`Projex - ${key} dashboard. Manage and track your team's progress and tasks.`}
            />
          </Helmet>
          <div className="dashboard-container">
            <nav className="sidebar">
              {window.location.pathname.startsWith(path) && (
                <ul>
                  {sidebar.map((item) => (
                    <li key={item.path}>
                      <NavLink to={`${path}/${item.path}`} activeClassName="active">
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
            <div className="main-content">
              <Suspense fallback={<div>Loading...</div>}>
                <DynamicComponent
                  dashboardKey={key}
                  componentName="DashboardOverview" // Default component
                />
              </Suspense>
            </div>
          </div>
        </Layout>
      ),
      children: sidebar.map((item) => ({
        path: `${path}/${item.path}`,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicComponent
              dashboardKey={key}
              componentName={item.component}
            />
          </Suspense>
        ),
      })),
    }));
  }, []);

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
          </Helmet>
        </Layout>
      ),
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        ...routes, // Dynamic routes based on dashboardConfig
      ],
    },
  ]);

  return (
    <DndProvider backend={HTML5Backend}> {/* Wrap the app in DndProvider */}
      <RouterProvider router={router} />
    </DndProvider>
  );
};

export default App;
