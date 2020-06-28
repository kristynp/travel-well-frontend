// class component to take advantage of componentDidMount
import React from 'react';
import { updateDestination, setFormDataForEdit } from '../actions/myDestinations';
import { connect } from 'react-redux';
import DestinationForm from './DestinationForm';

class EditDestinationFormContainer extends React.Component {

  handleSubmit = (event, formData, userId, history) => {
    const { updateDestination } = this.props
    event.preventDefault();
    console.log('in handleSubmit')
    updateDestination({
      ...formData,
      userId
    }, history);
  }

  render() {
    return <DestinationForm history={history} handleSubmit={handleSubmit} />
  } 
}

export default connect(null, { updateDestination, setFormDataForEdit })(EditDestinationFormContainer);