import React from 'react';
import Navbar from '../routes/Navbar';
import './Page404.css';

const Page404 = () => {
  return (
    <div>
      <Navbar />
      <div className='not-found'>
        <h1 className='not-found__main-title'>404 - NOT FOUND</h1>
      </div>
    </div>
  );
};

export default Page404;