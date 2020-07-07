// functional presentational component
import React from 'react'
import { Link } from 'react-router-dom'

const DestinationDetails = ({ destination }) => {
  return (
    destination ?
    <div>
      <h2 className="destinations-title">{destination.attributes.name}</h2>
      <p>Notes: {destination.attributes.notes}</p>
      <Link to={`/destinations/${destination.id}/edit`} >Edit Destination</Link>
    </div> : 
    null 
  )
}

export default DestinationDetails;