import React from 'react';
import './Header.css'; // Ensure the path to your CSS file is correct

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1 className='gradient-text'>Nordisk Kemiteknolog Konferens</h1>
      </div>
      <nav>
        <ul className="nav">
          {/* Use anchor tags for internal page sections */}
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;