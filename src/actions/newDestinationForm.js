//synchronous action creators

export const updateNewDestinationForm = (name, value) => {
  return {
    type: "UPDATE_NEW_DESTINATION_FORM",
    formData: { name, value }
  }
}


//asynchronous action creators