// functional presentational component
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class DestinationCard extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    let cardImage = this.props.destination.attributes.images[0] ? <Card.Img variant="top" src={this.props.destination.attributes.images[0].url} ></Card.Img> : null

    return (
      this.props.destination ?
      <div className='card-container'>
        <Card className='text-center' style={{ width: '18rem' }} key={this.props.destination.id} >
          {cardImage}
          <Card.Body>
            <Card.Title>{this.props.destination.attributes.name}</Card.Title>
            <Card.Text>{this.props.destination.attributes.country}</Card.Text>
            <Link to={`/destinations/${this.props.destination.id}`}>See Details</Link><br/>
          </Card.Body>
        </Card>
      </div> : 
      null 
    )
  } 
}

export default DestinationCard;