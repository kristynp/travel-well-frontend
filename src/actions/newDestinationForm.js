//synchronous action creators

export const updateNewDestinationForm = (name, value) => {
  console.log(name, value)
  return {
    type: "UPDATE_NEW_DESTINATION_FORM",
    formData: { name, value }
  }
}

export const resetNewDestinationForm = () => {
  return {
    type: "RESET_NEW_DESTINATION_FORM"
  }
}


//asynchronous action creators