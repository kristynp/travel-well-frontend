// class component
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AdvisoriesContainer from './AdvisoriesContainer';

class DestinationDetails extends React.Component {

  componentDidMount() {
    this.props.getDestinationAdvisories(this.props.destination.attributes.country, this.props.countryCodeData)
  }

  advisoryInfo(advisories) {
    if (advisories === {}) {
      return null;
    }
    if (advisories === undefined) {
      return null;
    }
    return <AdvisoriesContainer advisories={this.props.advisories}/>;
  }

  render () {
    const destination = this.props.destination
    // const validAdvisories = this.props.advisories !== undefined && this.props.advisories !== {}

    const details =     
      { destination } ?
        <div className='center-content padding'>
          <h1 className="destinations-title">{destination.attributes.name} - {destination.attributes.country}</h1>
          <p>Notes: {destination.attributes.notes}</p>
          <Link to={`/destinations/${destination.id}/edit`} >Edit Destination</Link>
          { this.advisoryInfo(this.props.advisories) }
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