export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DESTINATIONS":
      return action.destinations
    case "CLEAR_DESTINATIONS": 
      return []
    case "ADD_DESTINATION":
      return state.concat(action.destination)
    case "UPDATE_DESTINATION":
      console.log('in UPDATE DESTINATION action, action ', action)
      return state
    default:
      return state
  }
}