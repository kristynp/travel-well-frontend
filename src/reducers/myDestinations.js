export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DESTINATIONS":
      return action.destinations
    case "CLEAR_DESTINATIONS": 
      return []
    case "ADD_DESTINATION":
      return state.destinations.concat(action.destination)
    default:
      return state
  }
}