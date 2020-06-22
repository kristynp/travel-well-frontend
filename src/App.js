import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Logout from './components/Logout';
import MyDestinations from './components/MyDestinations';
import MainContainer from './components/MainContainer';
import { Route } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/my-destinations' component={MyDestinations}/>
      </div>
    );
  }

}

export default connect(null, { getCurrentUser })(App);
