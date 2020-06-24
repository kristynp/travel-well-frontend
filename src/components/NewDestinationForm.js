import React from 'react';
import { updateNewDestinationForm } from '../actions/newDestinationForm';
import { connect } from 'react-redux';

const NewDestinationForm = ({ name, notes, history }) => {
  const handleChange = event => {
    const { name, value } = event.target
    updateNewDestinationForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault();
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
  const { name, notes } = state.newDestinationForm 
  return {
    name,
    notes
  }
}

export default connect(mapStateToProps, { updateNewDestinationForm })(NewDestinationForm);