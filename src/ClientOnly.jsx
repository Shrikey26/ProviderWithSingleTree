import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { allComponents } from './allComponents';

export const ClientOnly = ({ componentName, id }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const Comp = allComponents[componentName];
    if (Comp && mountRef.current) {
      const root = ReactDOM.createRoot(mountRef.current);
      root.render(<Comp />);
    }
  }, [componentName]);

  return <div id={`client-${id}`} ref={mountRef} />;
};