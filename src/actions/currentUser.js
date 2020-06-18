//synchronous action creators

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}


// asynchronous action creators

export const login = credentials => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials) 
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  } 
}

export const getCurrentUser = credentials => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  } 
}