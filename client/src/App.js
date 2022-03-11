import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme/index'
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRoutes';
import {observer} from 'mobx-react-lite';
import AlertDialog from './components/AlertDialog';

function App() {

  return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <AlertDialog/>
          <AppRouter/>
      </ThemeProvider>
      </BrowserRouter>
  );
}

export default observer(App);
