//synchronous action creators

export const setGlobalImageData = imageData => {
  return {
    type: "SET_GLOBAL_IMAGE_DATA",
    imageData
  }
}

//asynchronous action creators

export const getGlobalImageData = () => {
  return dispatch => {
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    return fetch("https://api.unsplash.com/search/photos?page=10&query=travel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Client-ID ${accessKey}`
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      dispatch(setGlobalImageData(resp.results))
    })
    .catch(console.log)
  }
}