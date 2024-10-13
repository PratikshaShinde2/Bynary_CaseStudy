import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ profiles }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Profile Manager</h1>
      </div>

      <div className="profile-buttons">
        {profiles.map((profile) => (
          <Link to={`/profile/${profile.id}`} key={profile.id}>
            <button className="profile-btn">{profile.name}</button>
          </Link>
        ))}
      </div>

      
      <Link to="/admin" className="admin-panel-link">
        <button className="admin-btn">Admin Panel</button>
      </Link>
    </nav>
  );
};

export default Navbar;
