import React from 'react';

const NewDestinationForm = ({}) => {
  const handleChange = () => {}

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