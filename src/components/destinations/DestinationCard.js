// functional presentational component
import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({ destination }) => {
  return (
    destination ?
    <div>
      <h2>{destination.attributes.name}</h2>
      
    </div> : 
    null 
  )
}

export default DestinationCard;