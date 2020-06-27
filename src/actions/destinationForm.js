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


//asynchronous action creators