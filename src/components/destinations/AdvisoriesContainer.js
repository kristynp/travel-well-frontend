import React from 'react';
import { Card } from 'react-bootstrap';
import Advisory from './Advisory';
import GeneralAdvisory from './GeneralAdvisory';

const AdvisoriesContainer = ({ advisories }) => {
  const vaccineRecs = advisories !== undefined ?
    advisories.health.diseasesAndVaccinesInfo.Vaccines.map (v => (
      <Advisory key={v.description} advisory={v}/>
    ))
  : null

  const generalAdvisory = advisories.advisoryText !== undefined ? (
    <GeneralAdvisory advisory={advisories}/>
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

export default AdvisoriesContainer;