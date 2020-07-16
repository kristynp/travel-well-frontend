import React from 'react';
import { Card } from 'react-bootstrap';
import Advisory from './Advisory';
import GeneralAdvisory from './GeneralAdvisory';

const AdvisoriesContainer = ({ advisories }) => {
  const vaccineRecs = advisories.health ?
    advisories.health.diseasesAndVaccinesInfo.Vaccines.map (v => (
      <Advisory key={v.code} advisory={v}/>
    ))
  : null

  const generalAdvisory = advisories.advisoryText ? (
    <GeneralAdvisory advisory={advisories}/>
    )
  : null

  return (
    <div className='advisories-container'>
    {console.log('vaccineRecs-',vaccineRecs)}
      <Card className='advisory-card' style={{ width: '100%' }} >
        <Card.Header className='text-center'><h2>Current Advisories</h2></Card.Header>
    </Card>
      { generalAdvisory }
      { vaccineRecs }
    </div>
  )
}

export default AdvisoriesContainer;