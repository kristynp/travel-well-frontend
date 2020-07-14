// class component
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Advisories from './Advisories';

class DestinationDetails extends React.Component {

  componentDidMount() {
    this.props.getDestinationAdvisories(this.props.destination.attributes.country, this.props.countryCodeData)
  }

  render () {
    const destination = this.props.destination
    const advisories = this.props.advisories === {} ? null : <Advisories advisories={this.props.advisories}/>
    const details =     
    destination ?
      <div className='center-content padding'>
        <h1 className="destinations-title">{destination.attributes.name} - {destination.attributes.country}</h1>
        <p>Notes: {destination.attributes.notes}</p>
        <Link to={`/destinations/${destination.id}/edit`} >Edit Destination</Link>
        {advisories}
      </div> : 
    null 
    return details
  }
}

const mapStateToProps = state => {
  return {
    advisories: state.advisories
  }
}

export default connect(mapStateToProps)(DestinationDetails);