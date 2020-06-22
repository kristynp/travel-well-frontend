import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';

const NavBar = ({ currentUser }) => {

  return (
    <div className="NavBar">
      {currentUser ? <strong>Welcome, {currentUser.attributes.username}</strong> : ""}
      <button> Log In </button>
      <button> Sign Up </button>

    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar);