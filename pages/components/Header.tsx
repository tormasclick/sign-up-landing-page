import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-wrapper">
          <a href='#'>
          <i className="elipa_icon elipa_logo-mauritius country-flag "></i>
          </a>
        </div>
        <div className="nav-right">
          <h4>Providing you with the <span className="ipay-orange">best payment</span> experience</h4>
        </div>
      </nav>
    </header>
  );
} 


export default Header;

