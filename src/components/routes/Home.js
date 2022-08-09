import React from 'react';
import Header from '../UI/Header';
import './Home.css';
import Navbar from '../routes/Navbar';

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <div className='home'>
        <Header className='home__main-title'>
          <h1>Home Page</h1>
        </Header>
        <p>Welcome to my home page!</p>
      </div>
    </div>
  );
};

export default Home;
