import React from 'react';
import Card from '../UI/Card';
import Navbar from '../routes/Navbar';
import getData from '../data/data';

import './About.css';

const About = (props) => {
  const aboutMe = getData();

  return (
    <div>
      <Navbar />
      <div className='about'>
        <h1 className='about__main-title'>About Me Page</h1>
      </div>
      {aboutMe.map((about) => (
        <Card className='about-item' key={about.id}>
          <h4 className='about-item__title'>{about.title}</h4>
          <p className='about-item__text'>{about.text}</p>
        </Card>
      ))}
    </div>
  );
};

export default About;
