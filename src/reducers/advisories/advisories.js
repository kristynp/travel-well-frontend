export default (state = [], action) => {
  switch (action.type) {
    case "SET_DESTINATION_ADVISORIES":
      return action.advisories 
    default:
      return state
  }
}