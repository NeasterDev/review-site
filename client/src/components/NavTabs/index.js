import React from 'react';
import './style.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('Signup')}
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#write"
          onClick={() => handlePageChange('Write')}
          className={currentPage === 'Write' ? 'nav-link active' : 'nav-link'}
        >
          Write Review
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;