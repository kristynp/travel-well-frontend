//synchronous action creators

export const updateDestinationForm = (name, value) => {
  console.log(name, value)
  return {
    type: "UPDATE_DESTINATION_FORM",
    formData: { name, value }
  }
}

export const resetDestinationForm = () => {
  return {
    type: "RESET_DESTINATION_FORM"
  }
}

export const setFormDataForEdit = destination => {
  const destinationFormData = {
    name: destination.attributes.name,
    notes: destination.attributes.notes
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    destinationFormData
  }
}


//asynchronous action creators