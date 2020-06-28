// class component to take advantage of componentDidMount
import React from 'react';
import { updateDestination } from '../actions/myDestinations';
import { setFormDataForEdit } from '../actions/destinationForm'
import { connect } from 'react-redux';
import DestinationForm from './DestinationForm';

class EditDestinationFormContainer extends React.Component {

  componentDidMount() {
    this.props.destination && this.props.setFormDataForEdit(this.props.destination)
  }

  handleSubmit = (event, formData, userId, history) => {
    event.preventDefault();
    const { updateDestination, destination } = this.props
    console.log('in handleSubmit')
    updateDestination({
      ...formData,
      destinationId: destination.id,
      userId
    }, history);
  }

  render() {
    const { history, handleSubmit } = this.props
    //editMode gives opportunity to have conditional value depending on if it's new or edit in form
    return <DestinationForm editMode history={history} handleSubmit={handleSubmit} />
  } 
}

export default connect(null, { updateDestination, setFormDataForEdit })(EditDestinationFormContainer);