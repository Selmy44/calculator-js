import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/profile.jpeg';
import '../styles/Navbar.css';

function Navbar({ onToggleSidebar, isOpen }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (path) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="toggle-btn" onClick={onToggleSidebar}>
          {isOpen ? '✕' : '☰'}
        </button>
        <h2 className="logo">
          <span className="logo-x">X</span>
          <span className="logo-pence">PENCE</span>
        </h2>
      </div>
      <div className="navbar-right" ref={dropdownRef}>
        <img
          src={profileImg}
          alt="Profile"
          className="profile-pic"
          onClick={toggleDropdown}
        />
        <span className="profile-name" onClick={toggleDropdown}>
          Selmy NSHUTI ▾
        </span>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li onClick={() => handleNavigate('/edit-picture')}>Edit Profile Picture</li>
              <li onClick={() => handleNavigate('/profile')}>View Profile Info</li>
              <li onClick={() => handleNavigate('/change-password')}>Change Password</li>
              <li onClick={() => handleNavigate('/logout')}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
