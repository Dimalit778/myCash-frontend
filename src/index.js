import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { GlobalProvider } from './Context/globalContext.js';

import store from './store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Provider>
);
