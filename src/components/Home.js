import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div className='center'>
    <h2>Welcome to TravelWell, please <Link to='/signup'>Sign Up</Link> or <Link to='/login'>Log In</Link></h2>
  </div>
);

export default Home;
