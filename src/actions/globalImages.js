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
    return fetch("", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
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