// functional presentational component

import React from 'react'

const DestinationCard = ({ destination }) => {
  return (
    <p>{destination.attributes.name}</p>
  )
}

export default DestinationCard