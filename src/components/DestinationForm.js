import React from 'react';
import { updateDestinationForm } from '../actions/destinationForm';
import { connect } from 'react-redux';

const DestinationForm = ({ formData, history, updateDestinationForm, createDestination, userId }) => {
  const { name, notes } = formData 

  const handleChange = event => {
    const { name, value } = event.target
    updateDestinationForm(name, value)
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