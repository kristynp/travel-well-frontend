// functional presentational component
import React from 'react'

const ImageCard = ({ image }) => {
  return (
    image ?
    <div>
       Image will go here
    </div> : 
    null 
  )
}

export default ImageCard;