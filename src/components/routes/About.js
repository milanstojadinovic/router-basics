import React from 'react';
import Header from '../UI/Header';
import Navbar from '../routes/Navbar';
import getData from '../data/data';

import './About.css';

const About = () => {
  const aboutMe = getData();

  return (
    <div>
      <Navbar />
      <Header className='about'>
        <h1 className='about__main-title'>About Me Page</h1>
      </Header>
      {aboutMe.map((about) => (
        <div className='about-item' key={about.id}>
          <h4 className='about-item__title'>{about.title}</h4>
          <p className='about-item__text'>{about.text}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
