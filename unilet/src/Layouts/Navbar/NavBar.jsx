import React from 'react';
import Logo from '../../assets/Logo.png';
import './NavBar.css';
export default function NavBar() {
  return (
    <div className="Navbar">
      <img src={Logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Review a Property</li>
        <li>Read Reviews</li>
        <li>Articles</li>
      </ul>
      <button>Login In</button>
    </div>
  );
}
