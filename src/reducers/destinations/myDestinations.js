export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DESTINATIONS":
      return action.destinations
    case "CLEAR_DESTINATIONS": 
      return []
    case "ADD_DESTINATION":
      return state.concat(action.destination)
    case "UPDATE_DESTINATION":
      return state.map(destination => destination.id === action.destination.id ? action.destination : destination)
    case "DELETE_DESTINATION":
      return state.filter(destination => destination.id === action.destinationId ? false : true)
    case "SET_DESTINATION_IMAGE_DATA":
      const unchanged = state.filter(destination => destination.id !== action.id)
      console.log('unchanged', unchanged)
      //[{destinationId: action.destinationId, images: action.imageData}]
      return state
    default:
      return state
  }
}