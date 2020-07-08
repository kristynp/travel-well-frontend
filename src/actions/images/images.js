//synchronous action creators

export const setGlobalImageData = imageData => {
  return {
    type: "SET_GLOBAL_IMAGE_DATA",
    imageData
  }
}

//asynchronous action creators

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