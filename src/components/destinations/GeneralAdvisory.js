import React from 'react';
import { Card } from 'react-bootstrap';

const GeneralAdvisory = ({ advisory }) => {
  return (
    <Card className='advisory-card' style={{ width: '100%' }} >
      <Card.Header>General Advisory</Card.Header>
      <Card.Body>              
        <ul>
          <li>{ advisory.advisoryText }</li>
        </ul>
      </Card.Body>
    </Card>
  )
}

export default GeneralAdvisory;