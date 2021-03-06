import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'
import {ContextProvider} from './SocketContext'

ReactDOM.render(
  <ContextProvider>
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>
  </ContextProvider>
,
  document.getElementById('root')
);

