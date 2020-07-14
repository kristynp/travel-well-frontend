import React from 'react';
import { Card } from 'react-bootstrap';

const Advisory = ({ advisory }) => {
  return (
<Card className='advisory-card' style={{ width: '100%rem' }} >
  <Card.Header>
    { advisory.category }
  </Card.Header>
  <Card.Body>              
    <ul>
      <li>{ advisory.description }</li>
    </ul>
  </Card.Body>
</Card>
  )
}

export default Advisory;

