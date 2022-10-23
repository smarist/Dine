import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/PageRoutes';
import { theme } from './utils/theme';

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
