//functional container component
// responsible for rendering out a image component that will show each individual image
import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';

const GlobalImages = props => {
  const images = props.imageData.length > 0 ? 
    props.imageData.slice(0, 5).map(i => (
          <div key={i.id} >
            <ImageCard image={i}/>
          </div>
    )) : null

  return images
}

const mapStateToProps = state => {
  return {
    imageData: state.globalImages
  }
}

export default connect(mapStateToProps)(GlobalImages)