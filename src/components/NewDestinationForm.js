import React from 'react';

const NewDestinationForm = ({}) => {
  const handleChange = event => {
    const { name, value } = event.target
    updateNewDestinationForm(name, value)
  }

  return (
    <form>
      <input 
        name="name"
        onChange={handleChange}
        value={"name"}
      />
      <input 
        name="notes"
        onChange={handleChange}
        value={"notes"}
      />  
    </form>
  )}

export default NewDestinationForm;