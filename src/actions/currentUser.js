import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { getMyDestinations } from './myDestinations'


//synchronous action creators

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators

export const signup = credentials => {
  return dispatch => {
    const userInfo = {user: credentials}
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo) 
    })
    .then(resp => resp.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
        dispatch(getMyDestinations())
        dispatch(resetSignupForm())
      }
    })
    .catch(console.log)
  } 
}

export const login = (credentials, history) => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials) 
    })
    .then(resp => resp.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
        dispatch(getMyDestinations())
        dispatch(resetLoginForm())
        history.push('/')
      }
    })
    .catch(console.log)
  } 
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
        dispatch(getMyDestinations())
      }
    })
    .catch(console.log)
  } 
}

