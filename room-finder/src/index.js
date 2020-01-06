import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose } from 'redux';
import {Provider } from 'react-redux';
import combineReducers from './Reducers';

const store = createStore(combineReducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
document.getElementById('root'));

if(window.Cypress){
  window.store = store;
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
