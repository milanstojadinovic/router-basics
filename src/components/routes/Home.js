import React from 'react';
import './Home.css';
import Navbar from '../routes/Navbar';

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <div className='home'>
        <div className='home__main-title'>
          <h1>Home Page</h1>
        </div>
        <p>Welcome to my home page!</p>
      </div>
    </div>
  );
};

export default Home;
