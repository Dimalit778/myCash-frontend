import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

import { GlobalProvider } from './Context/globalContext.js';
const root = createRoot(document.getElementById('root'));

root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
