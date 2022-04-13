import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom';

import App from './App' 
import { store } from './app/store'
require('./styles.css')

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <HashRouter> 
      <Provider store={store}>
          <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)