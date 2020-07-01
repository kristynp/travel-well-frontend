//functional container component
// responsible for rendering out a Destination component that will show each individual Destination
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardColumns, Button } from 'react-bootstrap';

const MyDestinations = props => {
  const destinationCards = props.destinations.length > 0 ? 
    props.destinations.map(d => (
      <Card style={{ width: '18rem' }} key={d.id} >
        <Card.Img variant="top" src="holder.js/100px180" ></Card.Img>
        <Card.Body>
          <Card.Title>{d.attributes.name}</Card.Title>
          <Card.Text>Country</Card.Text>
          <Link to={`/destinations/${d.id}`}>See Details</Link>
        </Card.Body>
      </Card>

    )) 
    : null

  return (
    <>
      <h1 className="destinations-title">My Destinations</h1>
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

