import React from 'react';
import RouteComponent from './routes/index';
import { ThemeProvider } from '@mui/material';
import theme from './themes';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouteComponent />
    </ThemeProvider>
  );
}

export default App;
