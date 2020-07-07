// functional presentational component
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const DestinationCard = ({ destination }) => {
  let cardImage = destination.attributes.images[0] ? <Card.Img variant="top" src={destination.attributes.images[0].url} ></Card.Img> : null
  return (
    destination ?
    <div className='card-container'>
      <Card className='text-center' style={{ width: '18rem' }} key={destination.id} >
        {cardImage}
        <Card.Body>
          <Card.Title>{destination.attributes.name}</Card.Title>
          <Card.Text>{destination.attributes.country}</Card.Text>
          <Link to={`/destinations/${destination.id}`}>See Details</Link>
        </Card.Body>
      </Card>
    </div> : 
    null 
  )
}

export default DestinationCard;