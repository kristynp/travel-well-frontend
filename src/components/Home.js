import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <h2>Welcome, please <Link to='/signup'>Sign Up</Link> or <Link to='/login'>Log In</Link></h2>
  </div>
);

export default Home;
