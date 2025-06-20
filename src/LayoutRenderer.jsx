import { allComponents } from './allComponents';
import { ClientOnly } from './ClientOnly';

export const LayoutRenderer = ({ layout, rows, cols }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: '10px',
  };

  return (
    <div style={gridStyle}>
      {layout.map(({ id, component, type, row, col, colSpan = 1 }) => {
        const Comp = allComponents[component];
        const gridStyles = {
          gridRow: row + 1,
          gridColumn: `${col + 1} / span ${colSpan}`,
          border: '1px solid #ccc',
          padding: '8px',
          minHeight: '100px',
        };

        return (
          <div key={id} style={gridStyles}>
            {type === 'client' ? (
              <ClientOnly componentName={component} />
            ) : (
              <Comp />
            )}
          </div>
        );
      })}
    </div>
  );
};
