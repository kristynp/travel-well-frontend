import { resetDestinationForm } from "../destinations/destinationForm"

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

export const addDestination = destination => {
  return {
    type: "ADD_DESTINATION",
    destination 
  }
}

export const deleteDestinationSuccess = destinationId => {
  return {
    type: "DELETE_DESTINATION",
    destinationId 
  }
}

export const updateDestinationSuccess = destination => {
  return {
    type: "UPDATE_DESTINATION",
    destination 
  }
}

//asynchronous actions

export const deleteDestination = (destinationId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/destinations/${destinationId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(deleteDestinationSuccess(destinationId))
        history.push('/destinations')
      }
    })
    .catch(console.log)
  }
}

export const updateDestination = (destinationData, history) => {
  return dispatch => {
    const sendData = {
      name: destinationData.name,
      notes: destinationData.notes
    }
    return fetch(`http://localhost:3000/api/v1/destinations/${destinationData.destinationId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendData)
    })
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(updateDestinationSuccess(resp.data))
        history.push(`/destinations/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}

export const createDestination = (destinationData, history) => {
  return dispatch => {
    const sendData = {
      user_id: destinationData.userId,
      name: destinationData.name,
      notes: destinationData.notes
    }
    return fetch("http://localhost:3000/api/v1/destinations", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendData)
    })
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addDestination(resp.data))
        dispatch(resetDestinationForm())
      }
      history.push(`/destinations/${resp.data.id}`)
    })
    .catch(console.log)
  }
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
        dispatch(setMyDestinations(response.data))
      }
    })
    .catch(console.log)
  }
}