import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './styles/NavBar.css'; // Ensure to create this CSS file

const NavBar = () => {
  return (
    <nav>
      <div className="logo">ECOM</div>
      <div className="nav-links">
        <Link to="/">Home</Link> {/* Change to Link */}
        <Link to="/Products">View Products</Link> {/* Change to Link */}
        <Link to = "/groceries">View Groceries</Link>
        <a href='https://balajisudarshan.netlify.app/'>About Me</a> {/* Change to Link */}
      </div>
    </nav>
  );
}

export default NavBar;
