import React, { useMemo } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import dashboardConfig from "./dashboardConfig"; // Your configuration file
import Sidebar from "./Sidebar"; // Your Sidebar component
import DynamicComponent from "./DynamicComponent"; // Dynamically loaded components

const Dashboard = React.memo(({ dashboardKey }) => {
  const dashboard = useMemo(
    () => dashboardConfig.find((d) => d.key === dashboardKey),
    [dashboardKey],
  );

  if (!dashboard) return null; // If dashboard is not found, return nothing

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Routes>
          {dashboard.sidebar.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={
                <DynamicComponent
                  componentName={item.component}
                  dashboardKey={dashboard.key} // Pass the dashboard key here
                />
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
});

const App = () => (
  <Router>
    <Routes>
      {dashboardConfig.map(({ key, path }) => (
        <Route
          key={key} // Unique key for each route
          path={`${path}/*`} // Catch-all path for the dashboard's routes
          element={<Dashboard dashboardKey={key} />} // Pass the dashboardKey to Dashboard component
        />
      ))}
    </Routes>
  </Router>
);

export default App;
