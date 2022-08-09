import React from 'react';
import Header from '../UI/Header';
import Navbar from '../routes/Navbar';

import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <Header className='about'>
        <h1 className='about__main-title'>About Me Page</h1>
      </Header>
    </div>
  );
};

export default About;
