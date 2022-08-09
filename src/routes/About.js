import React from 'react';
import './About.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about'>
        <h1 className='about__main-title'>About Me Page</h1>
      </div>
    </div>
  );
};

export default About;
