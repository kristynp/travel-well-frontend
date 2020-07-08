// class component to take advantage of componentDidMount
import React from 'react';
import { updateDestination, deleteDestination } from '../../actions/destinations/myDestinations';
import { setFormDataForEdit, resetDestinationForm } from '../../actions/destinations/destinationForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DestinationForm from './DestinationForm';

// src/components/destinations/EditDestinationFormContainer.js
// src/actions/destinations/myDestinations.js

class EditDestinationFormContainer extends React.Component {

  componentDidMount() {
    this.props.destination && this.props.setFormDataForEdit(this.props.destination)
  }

  // updates the form if the user gets to edit page directly from browser url
  componentDidUpdate(prevProps) {
    this.props.destination && !prevProps.trip && this.props.setFormDataForEdit(this.props.destination)
  }

  // clears form if user moves from edit page to new destination page
  componentWillUnmount() {
    this.props.resetDestinationForm()
  }

  handleSubmit = (formData, userId) => {
    const { updateDestination, destination, history } = this.props
    console.log('in handleSubmit in Edit Container')
    updateDestination({
      ...formData,
      destinationId: destination.id,
      userId
    }, history);
  }

  render() {
    const { history, deleteDestination, destination } = this.props
    const destinationId = destination ? destination.id : null
    //editMode gives opportunity to have conditional value depending on if it's new or edit in form
    return( 
      <div>
        <DestinationForm editMode handleSubmit={this.handleSubmit} />
        <Link onClick={()=>{deleteDestination(destinationId, history)}}>Delete this destination</Link>
      </div>
    )} 
}

export default connect(null, { updateDestination, setFormDataForEdit, resetDestinationForm, deleteDestination })(EditDestinationFormContainer);