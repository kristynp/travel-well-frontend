export default (state = {}, action) => {
  switch (action.type) {
    case "SET_DESTINATION_ATTRACTIONS":
      return action.attractions 
    default:
      return state
  }
}