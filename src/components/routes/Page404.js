import React from 'react';
import Navbar from '../routes/Navbar';
import './Page404.css';

const Page404 = () => {
  //random font color function
  const randomRGB = () => {
    let R = Math.trunc(Math.random() * 255);
    let G = Math.trunc(Math.random() * 255);
    let B = Math.trunc(Math.random() * 255);

    return `rgb(${R}, ${G}, ${B})`;
  };

  return (
    <div>
      <Navbar />
      <div className='not-found'>
        <h1 className='not-found__main-title' style={{ color: randomRGB() }}>
          404 - NOT FOUND
        </h1>
      </div>
    </div>
  );
};

export default Page404;
