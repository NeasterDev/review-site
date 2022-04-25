import React from 'react';
import './style.css';

function NavTabs() {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <a
          href="/home"
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/login"
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/signup"
        >
          Signup
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/write"
        >
          Write Review
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;