import React from "react";
import "./style.css";

import Auth from "../../utils/auth";

function NavTabs() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handleBurgerClick = (e) => {
    const burger = document.querySelector('.navbar-menu');
    burger.classList.toggle('is-active');
  }

  return (
    <nav className="navbar mb-2 has">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={handleBurgerClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <h1 className="navbar-item">National Parks Review</h1>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
        {Auth.loggedIn() ? (
              <>
                <a className="navbar-item" href="/profile">Profile</a>
                <a className="navbar-item" href="/" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <a className="navbar-item" href="/login">Login</a>
                <a className="navbar-item" href="/signup">Signup</a>
              </>
            )}
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
