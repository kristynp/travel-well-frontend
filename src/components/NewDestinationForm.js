import React from 'react';
import { updateNewDestinationForm } from '../actions/newDestinationForm';

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