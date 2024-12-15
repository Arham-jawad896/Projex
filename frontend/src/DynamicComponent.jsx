import React, { Suspense, lazy, useEffect, useState } from 'react';

const DynamicComponent = ({ dashboardKey, componentName }) => {
  const [Component, setComponent] = useState(null);

  // Dynamically import the component when the props change
  useEffect(() => {
    const componentPath = `./pages/${dashboardKey}/${componentName}.jsx`;

    const modules = import.meta.glob('./pages/*/*.jsx'); // Glob import
    if (modules[componentPath]) {
      const importedComponent = lazy(() => modules[componentPath]());
      setComponent(importedComponent); // Set the component dynamically
    }
  }, [dashboardKey, componentName]);

  // Render fallback if the component is not loaded yet
  if (!Component) return <div>Loading...</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default DynamicComponent;
