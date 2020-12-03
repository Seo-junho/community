import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';

/* S: Redux */
import rootStore from './store';
import { Provider } from 'react-redux';
/* E: Redux */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
