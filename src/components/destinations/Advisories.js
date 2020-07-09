import React from 'react';
import { Card } from 'react-bootstrap';

//{advisories.advisories.health.diseasesAndVaccinesInfo.vaccines[0].category}

const Advisories = ({ advisories }) => {

  const vaccineRecs = advisories !== undefined ?
    advisories.health.diseasesAndVaccinesInfo.Vaccines.map (v => (
      <Card className='advisory-card' style={{ width: '45rem' }} >
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


  return (
    <div>
      <h3>Current Advisories</h3>
      { vaccineRecs }
    </div>
  )
}

export default Advisories;