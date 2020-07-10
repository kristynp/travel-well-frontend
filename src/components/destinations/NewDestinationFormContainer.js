import React from 'react';
import { createDestination } from '../../actions/destinations/myDestinations';
import { connect } from 'react-redux';
import DestinationForm from './DestinationForm';

const NewDestinationFormContainer = ({ history, createDestination }) => {
  const handleSubmit = (formData) => {
    createDestination({
      ...formData,
    }, history);
  }

  return (
    <>
    <h1 className='center'>Where Would You Like To Go?</h1><br/>
    <DestinationForm history={history} handleSubmit={handleSubmit} />
    </>
  )
}

export default connect(null, { createDestination })(NewDestinationFormContainer);