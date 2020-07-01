import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/user/currentUser';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

//       <Button variant="outline-info">Search</Button>
// <input type="submit" value="Log Out" />

const Logout = ({ logout, history }) => {

  return (
    <Button variant="outline-info" onClick={event => {
        event.preventDefault()
        logout()
        history.push('/')
      }
    }>
      Log Out
    </Button>
  )
}

export default withRouter(connect(null, { logout })(Logout))