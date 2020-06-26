import React from 'react';
import { updateNewDestinationForm } from '../actions/newDestinationForm';
import { createDestination } from '../actions/myDestinations';

import { connect } from 'react-redux';

const NewDestinationForm = ({ formData, history, updateNewDestinationForm, createDestination, userId }) => {
  const { name, notes } = formData 

  const handleChange = event => {
    const { name, value } = event.target
    updateNewDestinationForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    createDestination({
      ...formData,
      userId
    });
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
    formData: state.newDestinationForm,
    userId 
  }
}

export default connect(mapStateToProps, { updateNewDestinationForm, createDestination })(NewDestinationForm);