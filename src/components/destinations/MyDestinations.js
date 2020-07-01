//functional container component
// responsible for rendering out a Destination component that will show each individual Destination
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyDestinations = props => {
  const destinationCards = props.destinations.length > 0 ? 
    props.destinations.map(d => (<p key={d.id} ><Link to={`/destinations/${d.id}`}>{d.attributes.name}</Link></p>)) :
    null

  return destinationCards
}

const mapStateToProps = state => {
  return {
    destinations: state.myDestinations
  }
}

export default connect(mapStateToProps)(MyDestinations)

