import React from 'react';
import Login from './components/Login';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {Container, CssBaseline} from '@mui/material';
import Navbar from './components/TopBar'
import AuthPage from './pages/AuthPage';


const theme = createTheme({
    palette: {
        primary: {
            main : '#5855D6'
        },
        secondary: {
            main : '#333269'
        },
        background: {
            default: '#E5E5E5'
        }
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    }
})

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <AuthPage/>
      </ThemeProvider>
  );
}

export default App;
