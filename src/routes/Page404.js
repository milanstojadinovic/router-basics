import React from 'react';
import Navigation from './Navigation';
import './Page404.css';

const Page404 = () => {
  return (
    <div>
      <Navigation />
      <div className='not-found'>
        <h1 className='not-found__main-title'>404 - NOT FOUND</h1>
      </div>
    </div>
  );
};

export default Page404;
