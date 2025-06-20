import { LayoutRenderer } from './LayoutRenderer';
import { AppProvider } from './AppContext';
import layoutConfig from './layout.json';

function App() {
  return (
    <AppProvider>
      <LayoutRenderer {...layoutConfig} />
    </AppProvider>
  );
}

export default App;