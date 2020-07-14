// class component
import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/user/currentUser';
import { getDestinationAdvisories } from './actions/advisories/advisories';

import { getGlobalImageData } from './actions/images/images';
import NavBar from './components/NavBar';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import Home from './components/Home';
import MyDestinations from './components/destinations/MyDestinations';
import GlobalImages from './components/images/GlobalImages';
import DestinationDetails from './components/destinations/DestinationDetails';
import NewDestinationFormContainer from './components/destinations/NewDestinationFormContainer';
import EditDestinationFormContainer from './components/destinations/EditDestinationFormContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getGlobalImageData()
  }
  
  render() {
    const { loggedIn, destinations } = this.props

    return (
      <div className="App">
       { loggedIn ? <NavBar/> : null }
        <Jumbotron bg='dark' >
          <GlobalImages/>
        </Jumbotron>

        <Switch>
          <Route exact path='/' render={props => loggedIn ? <MyDestinations/> : <Home/>}/>
          <Route exact path='/signup' render={({ history })=><Signup history={history} />}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/destinations' component={MyDestinations}/>
          <Route exact path='/destinations/new' component={NewDestinationFormContainer}/>
          <Route exact path='/destinations/:id' render={props => {
            const destination = destinations.find(d => d.id === props.match.params.id)
            return <DestinationDetails destination={destination} {...this.props}/>
            }
          }/>

          <Route exact path='/destinations/:id/edit' render={props => {
            const destination = destinations.find(d => d.id === props.match.params.id)
            return (
            <div>
              <EditDestinationFormContainer destination={destination} {...this.props}/>
              <DestinationDetails destination={destination} {...this.props}/>
            </div>
            )}
          }/>
          
        </Switch>
      </div>
    );
  }

  
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    destinations: state.myDestinations,
    countryCodeData: state.countryCodeData
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser, getGlobalImageData, getDestinationAdvisories })(App));
