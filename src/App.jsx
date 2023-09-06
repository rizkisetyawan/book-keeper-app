import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Home } from './pages';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <Home />
      </ModalsProvider>
    </MantineProvider>
  );
};

export default App;
