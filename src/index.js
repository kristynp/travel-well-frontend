import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

///////////
//!
//! don't have a reducer set up yet. This is a mock setup
const users = () => []

const reducer = combineReducers({
  users: users //could be shortened to just be users because the name is the same
})
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
//////////


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);