import React from 'react';
import { updateNewDestinationForm } from '../actions/newDestinationForm';
import { connect } from 'react-redux';

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
        placeholder={"name"}
      />
      <input 
        name="notes"
        onChange={handleChange}
        placeholder={"notes"}
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