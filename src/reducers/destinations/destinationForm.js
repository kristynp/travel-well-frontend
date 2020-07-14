const initialState = {
  name: "",
  country: "",
  notes: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_DESTINATION_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      } 
    case "RESET_DESTINATION_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.destinationFormData
    default: 
      return state
  }
}