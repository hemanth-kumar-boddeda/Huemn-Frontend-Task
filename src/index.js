import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './utils/reportWebVitals';
import store from './utils/store';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Report performance metrics (if needed)
reportWebVitals();
