import React from 'react';
import Navigation from './Navigation';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className='home'>
        <h1 className='home__main-title'>Home Page</h1>
        <p>Welcome to my home page!</p>
      </div>
    </div>
  );
};

export default Home;
