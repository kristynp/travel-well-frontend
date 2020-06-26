//synchronous actions

export const setMyDestinations = destinations => {
  return {
    type: "SET_MY_DESTINATIONS",
    destinations
  }
}

export const clearDestinations = () => {
  return {
    type: "CLEAR_DESTINATIONS"
  }
}

export const addDestination = trip => {
  return {
    type: "ADD_DESTINATION",
    destination 
  }
}

//asynchronous actions

export const createDestination = destinationData => {
  
}

export const getMyDestinations = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/destinations", {
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
        console.log(response.data)
        dispatch(setMyDestinations(response.data))
      }
    })
    .catch(console.log)
  }
}