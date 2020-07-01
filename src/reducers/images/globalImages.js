export default (state = [], action) => {
  switch (action.type) {
    case "SET_GLOBAL_IMAGE_DATA":
      return action.imageData
    default:
      return state
  }
}