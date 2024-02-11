import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

const root = createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider context={'MyCash'}>
    <Provider store={store}>
      <App />
    </Provider>
  </HelmetProvider>
);
