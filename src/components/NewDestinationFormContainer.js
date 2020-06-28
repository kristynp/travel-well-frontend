import React from 'react';
import { createDestination } from '../actions/myDestinations';
import { connect } from 'react-redux';
import DestinationForm from './DestinationForm';

const NewDestinationFormContainer = ({ history, createDestination }) => {
  const handleSubmit = (event, formData, userId, history) => {
    event.preventDefault();
    console.log('in handleSubmit')
    createDestination({
      ...formData,
      userId
    }, history);
  }

  return <DestinationForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createDestination })(NewDestinationFormContainer);