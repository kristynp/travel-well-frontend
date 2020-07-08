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

export const setDestinationImageData = (imageData, id) => {
  console.log(imageData)
  return {
    type: "SET_DESTINATION_IMAGE_DATA",
    destinationId: id,
    imageData: imageData
  }
}

//asynchronous actions

export const createDestinationImage = (imageData, id) => {
  return dispatch => {
    const sendData = {
      destination_id: id,
      url: imageData.urls.thumb,
      external_id: imageData.id,
      description: imageData.description,
      alt_description: imageData.alt_description
    }
    console.log('in createDestinationImage - sendData', sendData)
    return fetch("http://localhost:3000/api/v1/images", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendData)
    })
    .then(() => setDestinationImageData(imageData, id))
    .catch(console.log)
  }
}

export const getDestinationImages = (destinationCountry, id) => {
  const countrySlug = destinationCountry.replace(/\s/g , "-").toLowerCase()
  console.log('countrySlug', countrySlug)
  return dispatch => {
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    return fetch(`https://api.unsplash.com/search/photos?page=6&query=${countrySlug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Client-ID ${accessKey}`
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log('resp', resp)
      resp.results.forEach(imageObject => dispatch(createDestinationImage(imageObject, id)))
      setDestinationImageData(resp.results, id)
      // resp.results is an array of image objects
    })
    .catch(console.log)
  }
}

export const createDestination = (destinationData, history) => {
  return dispatch => {
    const sendData = {
      user_id: destinationData.userId,
      name: destinationData.name,
      country: destinationData.country,
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
        dispatch(getDestinationImages(resp.data.attributes.country, resp.data.id)) //retrieve and create images
        // collect images into object with resp.data
        console.log('resp.data just before adding destination to state', resp.data)
        dispatch(addDestination(resp.data))
        dispatch(resetDestinationForm())
      }
      history.push(`/destinations/${resp.data.id}`)
      return resp.data
    })
    .catch(console.log)
  }
}

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