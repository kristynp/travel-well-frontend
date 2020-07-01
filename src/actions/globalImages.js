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
    const access_key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    console.log(access_key)
    return fetch("https://api.unsplash.com/search/photos?page=10&query=travel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Client-ID ${access_key}`
      }
    })
    .then(resp => resp.json())
    .then(response => {
      // if (response.error) {
      //   alert(response.error)
      // } else {
        console.log(response)
        //dispatch(setGlobalImageData(response.data))
      // }
    })
    .catch(console.log)
  }
}