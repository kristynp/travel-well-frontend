// functional presentational component
import React from 'react'
import { Link } from 'react-router-dom'

class DestinationDetails extends React.Component {

  componentDidMount() {
    
  }

  render () {
    const destination = this.props.destination
    const details =     
    destination ?
      <div>
        <h2 className="destinations-title">{destination.attributes.name}</h2>
        <p>Notes: {destination.attributes.notes}</p>
        <Link to={`/destinations/${destination.id}/edit`} >Edit Destination</Link>
      </div> : 
    null 
    return details
  }
}

export default DestinationDetails;