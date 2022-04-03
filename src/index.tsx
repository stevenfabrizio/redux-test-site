import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom';

import App from './app' 
import { store } from './app/store'
require('./styles.css')

ReactDOM.render( 
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)