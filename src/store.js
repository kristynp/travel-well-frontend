import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import myDestinations from './reducers/myDestinations';
import signupForm from './reducers/signupForm';
import newDestinationForm from './reducers/newDestinationForm';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  currentUser,
  loginForm,
  myDestinations,
  signupForm,
  newDestinationForm
})
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store