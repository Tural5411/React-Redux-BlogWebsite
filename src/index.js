import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createStore} from 'redux';
import routReducer from './reducers/routReducer';
import {Provider} from 'react-redux'


const store=createStore(routReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
