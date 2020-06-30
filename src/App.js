// class component
import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { getGlobalImageData } from './actions/globalImages';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import MyDestinations from './components/MyDestinations';
import DestinationCard from './components/DestinationCard';
import NewDestinationFormContainer from './components/NewDestinationFormContainer';
import EditDestinationFormContainer from './components/EditDestinationFormContainer';
import { Route, Switch, withRouter } from 'react-router-dom';


class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
    // this.props.getGlobalImages
  }
  
  render() {
    const { loggedIn, destinations } = this.props

    return (
      <div className="App">
       { loggedIn ? <NavBar/> : null }
        <Switch>
          <Route exact path='/' render={props => loggedIn ? <MyDestinations/> : <Home/>}/>
          <Route exact path='/signup' render={({ history })=><Signup history={history} />}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/destinations' component={MyDestinations}/>
          <Route exact path='/destinations/new' component={NewDestinationFormContainer}/>

          <Route exact path='/destinations/:id' render={props => {
            const destination = destinations.find(d => d.id === props.match.params.id)
            return <DestinationCard destination={destination} {...props}/>
            }
          }/>

          <Route exact path='/destinations/:id/edit' render={props => {
            const destination = destinations.find(d => d.id === props.match.params.id)
            return <EditDestinationFormContainer destination={destination} {...props}/>
            }
          }/>
          
        </Switch>
      </div>
    );
  }

  
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    destinations: state.myDestinations
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser, getGlobalImageData })(App));
