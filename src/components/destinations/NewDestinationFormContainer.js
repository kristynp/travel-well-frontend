import React from 'react';
import { createDestination } from '../../actions/destinations/myDestinations';
import { connect } from 'react-redux';
import DestinationForm from './DestinationForm';

const NewDestinationFormContainer = ({ history, createDestination }) => {
  const handleSubmit = (formData) => {
    console.log('in handleSubmit')
    createDestination({
      ...formData,
    }, history);
  }

  return <DestinationForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createDestination })(NewDestinationFormContainer);