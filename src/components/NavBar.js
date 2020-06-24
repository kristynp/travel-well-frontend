// functional component
import React from 'react';
import { connect } from 'react-redux';
// NavLink gives ability to style links
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className='NavBar'>
      <NavLink to='/destinations'>My Destinations  |  </NavLink>
      <NavLink to='/destinations/new'>Add Destination  |  </NavLink>
      { loggedIn ? <Logout/> : null }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);