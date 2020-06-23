import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Home from './components/Home';
import MyDestinations from './components/MyDestinations';
import NewDestination from './components/NewDestination';
import MainContainer from './components/MainContainer';
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props

    return (
      <div className="App">
        { loggedIn ? <Logout/> : null }
        <NavBar/>
        <Route exact path='/signup' render={({ history })=><Signup history={history} />}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' render={(props)=>loggedIn ? <MyDestinations/> : <Home/>}/>
        <Route exact path='/destinations' component={MyDestinations}/>
        <Route exact path='/destinations/new' component={NewDestination}/>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
