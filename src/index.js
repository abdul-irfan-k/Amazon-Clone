import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import MaterialTheme from './Materialtheme';
import { ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={MaterialTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


