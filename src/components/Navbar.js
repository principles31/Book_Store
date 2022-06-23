import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => (
  <>
    <div className="navbar">
      <div className="nav-links">
        <h1 className="nav-heading">Bookstore CMS</h1>
        <Link className="h" to="/">Books</Link>
        <Link className="h" to="/categories">Categories</Link>
      </div>
      <div className="p-icon">
        <Link className="profile" to="/">
          <FaRegUser />
        </Link>
      </div>
    </div>
  </>
);

export default Navbar;
