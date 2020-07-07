//functional container component
// responsible for rendering out a Destination component that will show each individual Destination
import React from 'react'
import { connect } from 'react-redux'
import DestinationCard from './DestinationCard';
import { CardColumns } from 'react-bootstrap';


const MyDestinations = props => {
  const destinationCards = props.destinations.length > 0 ? 
    props.destinations.map(d => 
      (
      <DestinationCard destination={d}/>
    )) 
    : null

  return (
    <>
      <h1 className="destinations-title">My Destinations</h1>
      <br/><br/>
      <CardColumns>
        {destinationCards}
      </CardColumns>
    </>
  )
}

const mapStateToProps = state => {
  return {
    destinations: state.myDestinations
  }
}

export default connect(mapStateToProps)(MyDestinations)

