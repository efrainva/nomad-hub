import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {createStore, applyMiddleware } from 'redux';
import {Provider } from 'react-redux';
import {rootReducer} from './redux/Reducers/rootReducer';



const store = createStore(rootReducer, applyMiddleware(logger,thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
document.getElementById('root'));

// if(window.Cypress){
//   window.store = store;
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
