import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './Context/FireBaseAuthContext';

import { store } from './store.js';
import { Provider } from 'react-redux';
import { GlobalProvider } from './Context/globalContext.js';
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    {/* <AuthContextProvider> */}
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
    {/* </AuthContextProvider> */}
  </Provider>
);
