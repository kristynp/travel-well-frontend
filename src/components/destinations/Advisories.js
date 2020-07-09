import React from 'react';
import { Card } from 'react-bootstrap';

//{advisories.advisories.health.diseasesAndVaccinesInfo.vaccines[0].category}

const Advisories = ({ advisories }) => {

  const a = advisories === undefined ? null : advisories 
  console.log('a.health.diseasesAndVaccinesInfo.Vaccines', a.health.diseasesAndVaccinesInfo.Vaccines)
  
  return (
    <div>
      <h3>Current Advisories</h3>
        <Card className='advisory-card' style={{ width: '30rem' }} >
          <Card.Header>
            Diseases and Vaccines Info
          </Card.Header>
{         <Card.Body>              
            <ul>
              <li></li>
                <p></p>
              <li>item2</li>
            </ul>
          </Card.Body>}
        </Card>
    </div>
  )
}

export default Advisories;