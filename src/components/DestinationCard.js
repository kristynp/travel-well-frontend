// functional presentational component
import React from 'react'

const DestinationCard = ({ destination }) => {
  console.log('hi')
  return (
    destination ?
    <div>
      <h2>{destination.attributes.name}</h2>
      <p>Notes: {destination.attributes.notes}</p>
    </div> : 
    <p>No destination prop</p>
  )
}

export default DestinationCard;