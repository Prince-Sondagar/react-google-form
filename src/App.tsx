import React from 'react';
import RouteComponent from './routes/index';
import { ThemeProvider } from '@mui/material';
import themes from './themes';


function App() {

  return (
    <ThemeProvider theme={themes}>
      <RouteComponent />
    </ThemeProvider>
  );
}

export default App;
