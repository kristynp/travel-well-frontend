import React from 'react';
import { Card } from 'react-bootstrap';

const Advisories = ({ advisories }) => {
  const vaccineRecs = advisories !== undefined ?
    advisories.health.diseasesAndVaccinesInfo.Vaccines.map (v => (
      <Card className='advisory-card' style={{ width: '100%rem' }} >
      <Card.Header>
        { v.category }
      </Card.Header>
      <Card.Body>              
        <ul>
          <li>{ v.description }</li>
        </ul>
      </Card.Body>
    </Card>
    ))
  : null

  const generalAdvisory = advisories.advisoryText !== undefined ? (
    <Card className='advisory-card' style={{ width: '100%' }} >
    <Card.Header>General Advisory</Card.Header>
    <Card.Body>              
      <ul>
        <li>{ advisories.advisoryText }</li>
      </ul>
    </Card.Body>
  </Card>
  )
  : null


  return (
    <div className='advisories-container'>
      <Card className='advisory-card' style={{ width: '100%' }} >
        <Card.Header className='text-center'><h2>Current Advisories</h2></Card.Header>
    </Card>
      { generalAdvisory }
      { vaccineRecs }
    </div>
  )
}

export default Advisories;