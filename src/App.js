import { MuiThemeProvider } from '@material-ui/core';
import Home from './pages/Home';
import { theme } from './utils/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
