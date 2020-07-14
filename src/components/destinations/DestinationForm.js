import React from 'react';
import { updateDestinationForm } from '../../actions/destinations/destinationForm';
import { connect } from 'react-redux';
import { Form, Button, FormControl } from 'react-bootstrap';

const DestinationForm = ({ formData, updateDestinationForm, handleSubmit, editMode }) => {
  const { name, notes, country } = formData 

  const handleChange = event => {
    const { name, value } = event.target
    updateDestinationForm(name, value)
  }
  
  return (
    <Form onSubmit={event => {
      event.preventDefault();
      handleSubmit(formData)
      }}>

    <Form.Group controlId="name">
      <Form.Label>Destination Name</Form.Label>
      <Form.Control 
      type="text"
      name="name"
      onChange={handleChange}
      value={name}
      />
    </Form.Group>
    <Form.Group controlId="country" >
      <Form.Label>Country</Form.Label>
      <Form.Control
        disabled
        type="text"
        name="country"
        onChange={handleChange}
        value={country}
      />
    </Form.Group>
    <Form.Group controlId="notes">
      <Form.Label>Notes</Form.Label>
      <Form.Control
        as="textarea"
        className="text-area"
        name="notes"
        onChange={handleChange}
        value={notes}
      />
    </Form.Group>
    <Button variant="dark" type="submit">
      { editMode ? "Update Destination" : "Add Destination" }
    </Button>
  </Form>
  )}

const mapStateToProps = state => {
  return {
    formData: state.destinationForm,
  }
}

export default connect(mapStateToProps, { updateDestinationForm })(DestinationForm);