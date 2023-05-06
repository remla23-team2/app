import MainComponent from './components/main/main';
import { MantineProvider, Text } from '@mantine/core';
import SentimentProvider from './providers/sentimentProvider';

function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        colorScheme: 'dark',
        colors: {
          brand: [
            "#BDB3A1",
            "#B4A58B",
            "#AF9973",
            "#AE8F5A",
            "#AB8545",
            "#A77C33",
            "#A57421",
            "#89652A",
            "#72592E",
            "#614F30",
            "#53462F",
            "#473E2E",
            "#3E372B"
          ],
        },
        primaryColor: 'brand',
      }}>
        <SentimentProvider>
          <MainComponent />
        </SentimentProvider>
        {/* <Text>Welcome to Mantine!</Text> */}
      </MantineProvider>
    </div>
  );
}

export default App;

