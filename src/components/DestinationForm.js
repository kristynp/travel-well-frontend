import React from 'react';
import { updateDestinationForm } from '../actions/destinationForm';
import { createDestination } from '../actions/myDestinations';

import { connect } from 'react-redux';

const DestinationForm = ({ formData, history, updateDestinationForm, createDestination, userId }) => {
  const { name, notes } = formData 

  const handleChange = event => {
    const { name, value } = event.target
    updateDestinationForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    createDestination({
      ...formData,
      userId
    }, history);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name"
        onChange={handleChange}
        placeholder={"name"}
        value={name}
      />
      <input 
        name="notes"
        onChange={handleChange}
        placeholder={"notes"}
        value={notes}
      /> 
      <input 
        type="submit" 
        value="Create Destination"
      /> 
    </form>
  )}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : "" 
  return {
    formData: state.destinationForm,
    userId 
  }
}

export default connect(mapStateToProps, { updateDestinationForm, createDestination })(DestinationForm);