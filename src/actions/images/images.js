//synchronous action creators

export const setGlobalImageData = imageData => {
  return {
    type: "SET_GLOBAL_IMAGE_DATA",
    imageData
  }
}

export const setDestinationImageData = (imageData, id) => {
  return {
    type: "SET_DESTINATION_IMAGE_DATA",
    destinationId: id,
    imageData: imageData
  }
}

//asynchronous action creators

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
    .catch(console.log)
  }
}

export const getGlobalImageData = () => {
  return dispatch => {
    const access_key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    return fetch("https://api.unsplash.com/search/photos?page=10&query=travel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Client-ID ${access_key}`
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      dispatch(setGlobalImageData(resp.results))
    })
    .catch(console.log)
  }
}