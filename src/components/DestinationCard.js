// functional presentational component

import React from 'react'

const DestinationCard = ({ destination }) => {
  return (
    <div>
      <p>{destination.attributes.name}</p>
    </div>
  )
}

export default DestinationCard