// functional component
import React from 'react';
import { connect } from 'react-redux';
import Logout from './user/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">TravelWell</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/destinations">My Destinations</Nav.Link>
      <Nav.Link as={Link} to="/destinations/new">Add Destination</Nav.Link>
    </Nav>
      { loggedIn ? <Logout/> : null }
    </Navbar>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);