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
      {type === 'client' ? <ClientOnly componentName={component} /> : <Comp />}
    </div>
  );
})}
