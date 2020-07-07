import React from 'react';
import { updateDestinationForm } from '../../actions/destinations/destinationForm';
import { connect } from 'react-redux';

const DestinationForm = ({ formData, updateDestinationForm, handleSubmit, editMode }) => {
  const { name, notes, country } = formData 

  const handleChange = event => {
    const { name, value } = event.target
    updateDestinationForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault();
      handleSubmit(formData)
      }}>
      <input 
        name="name"
        onChange={handleChange}
        placeholder={"name"}
        value={name}
      /><br/><br/>
      <input 
        name="country"
        onChange={handleChange}
        placeholder={"country"}
        value={country}
      /><br/><br/>
      <textarea 
        name="notes"
        onChange={handleChange}
        placeholder={"notes"}
        value={notes}
      /> 
      <input 
        type="submit" 
        value={ editMode ? "Update Destination" : "Add Destination"}
      /> 
    </form>
  )}

const mapStateToProps = state => {
  return {
    formData: state.destinationForm,
  }
}

export default connect(mapStateToProps, { updateDestinationForm })(DestinationForm);