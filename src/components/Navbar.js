import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='container'>
        <Link style={{ color: '#f6ffff' }} to='/'>
          <h2> &lt;/&gt; Code</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
