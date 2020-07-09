import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/user/currentUser';
import loginForm from './reducers/user/loginForm';
import myDestinations from './reducers/destinations/myDestinations';
import signupForm from './reducers/user/signupForm';
import globalImages from './reducers/images/globalImages';
import destinationForm from './reducers/destinations/destinationForm';
import countryCodeData from './reducers/advisories/countryCodeData';
import advisories from './reducers/advisories/advisories';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  currentUser,
  loginForm,
  myDestinations,
  signupForm,
  destinationForm,
  globalImages, 
  countryCodeData,
  advisories
})
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store