const initialState = {
  name: "",
  notes: "",
  cdc_info: {
    vaccinations: "",
    advisories: "",
    recommendations: ""
  }
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_DESTINATION_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      } 
    case "RESET_NEW_DESTINATION_FORM":
      return initialState
    default: 
      return state
  }
}