import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import store from './store';
import { Provider } from 'react-redux';

const initialOptions = {
  clientId:
    'AYfDEnlL6dSkqofhOawWZez0PjxjZpT9qHqLnv-fKFCVTuzHchxhXuouL5rcHmGZs4gdZppqVVOwKw2s',
  currency: 'USD',
  intent: 'capture',
};

const root = createRoot(document.getElementById('root'));

root.render(
  <PayPalScriptProvider options={initialOptions}>
    <Provider store={store}>
      <App />
    </Provider>
  </PayPalScriptProvider>
);
