// functional component
import React from 'react';
import { connect } from 'react-redux';
import Logout from './user/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">TravelWell</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/destinations">My Destinations</Nav.Link>
      <Nav.Link href="/destinations/new">Add Destination</Nav.Link>
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