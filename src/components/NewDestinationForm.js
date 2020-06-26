import React from 'react';
import { updateNewDestinationForm } from '../actions/newDestinationForm';
import { connect } from 'react-redux';

const NewDestinationForm = ({ formData, history, updateNewDestinationForm }) => {
  const { name, notes } = formData 

  const handleChange = event => {
    console.log("in handle change, name")
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
  return {
    formData: state.newDestinationForm
  }
}

export default connect(mapStateToProps, { updateNewDestinationForm })(NewDestinationForm);