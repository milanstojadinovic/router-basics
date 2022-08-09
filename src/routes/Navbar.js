import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className='navigation'>
        <Link className='navigation-link' to='/'>
          Main
        </Link>
        <Link className='navigation-link' to='/home'>
          Home
        </Link>
        <Link className='navigation-link' to='/about'>
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
