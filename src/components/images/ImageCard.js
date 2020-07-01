// functional presentational component
import React from 'react'

const ImageCard = ({ image }) => {
  return (
    image ?
    <span className="image-card">
      <img className="global-image" src={image.urls.thumb} alt={image.alt_description}/>
    </span> : 
    null 
  )
}

export default ImageCard;