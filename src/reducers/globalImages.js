export default (state = [], action) => {
  switch (action.type) {
    case "GET_GLOBAL_IMAGE_DATA":
      return action.imageData
    default:
      return state
  }
}