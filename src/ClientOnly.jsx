// ClientOnly.jsx (hydrated inside the tree)
import { useEffect, useState } from 'react';
import { allComponents } from './allComponents';

export const ClientOnly = ({ componentName }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const Comp = allComponents[componentName];
    setComponent(() => Comp);
  }, [componentName]);

  if (!Component) return <div>Loading {componentName}...</div>;

  return <Component />;
};
