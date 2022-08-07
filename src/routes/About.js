import React from 'react';
import Navigation from './Navigation';
import './About.css';

const About = () => {
  return (
    <div>
      <Navigation />
      <div className='about'>
        <h1 className='about__main-title'>About Me Page</h1>
      </div>
    </div>
  );
};

export default About;
