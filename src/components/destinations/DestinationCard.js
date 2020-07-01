// functional presentational component
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';


const DestinationCard = ({ destination }) => {
  return (
    destination ?
    <Card style={{ width: '18rem' }} key={destination.id} >
      <Card.Img variant="top" src="holder.js/100px180" ></Card.Img>
      <Card.Body>
        <Card.Title>{destination.attributes.name}</Card.Title>
        <Card.Text>Country</Card.Text>
        <Link to={`/destinations/${destination.id}`}>See Details</Link>
      </Card.Body>
    </Card> : 
    null 
  )
}

export default DestinationCard;