import React from 'react';
import { createDestination } from '../actions/myDestinations';
import { connect } from 'react-redux';
import { createDestination } from '../actions/myDestinations';

const handleSubmit = event => {
  event.preventDefault();
  createDestination({
    ...formData,
    userId
  }, history);
}

const NewDestinationFormContainer = ({}) => {
  <DestinationForm history={history} handleSubmit={handleSubmit} />
}

export default NewDestinationFormContainer;