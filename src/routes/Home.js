import React from 'react';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home'>
        <h1 className='home__main-title'>Home Page</h1>
        <p>Welcome to my home page!</p>
      </div>
    </div>
  );
};

export default Home;
