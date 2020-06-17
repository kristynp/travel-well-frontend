import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/users';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  // each property comes from the name of a reducer
  users: usersReducer //should be shortened to just be users because the name is the same
})
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store