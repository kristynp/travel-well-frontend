//functional container component
// responsible for rendering out a Destination component that will show each individual Destination
import React from 'react'
import DestinationCard from './DestinationCard'
import { connect } from 'react-redux'

const MyDestinations = props => {
  const destinationCards = props.destinations.map(d => <DestinationCard destination={d} key={d.id}/>)
  return (
    destinationCards.length > 0 ? destinationCards : null
  )
}

const mapStateToProps = state => {
  return {
    destinations: state.myDestinations
  }
}

export default connect(mapStateToProps)(MyDestinations)

