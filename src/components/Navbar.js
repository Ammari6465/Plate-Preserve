import React from 'react';
import './Navbar.css';
import logo from './Logo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt='logo-img'></img>   
      <h1>Plate Preserve</h1>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/community">Community Involvement</a></li>
        <li><a href="/partner">Partner with Us</a></li>
        <li><a href="/locate-food-banks">Locate Food Banks</a></li>  {/* New link */}
      </ul>
    </nav>
  );
};

export default Navbar;
