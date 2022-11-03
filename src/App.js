import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Routes from './Routes/PageRoutes';
import { theme } from './utils/theme';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
