//synchronous action creators

export const getGlobalImageData = imageData => {
  return {
    type: "GET_GLOBAL_IMAGE_DATA",
    imageData
  }
}

//asynchronous action creators