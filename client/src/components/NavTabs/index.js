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
    <nav className="navbar is-fixed-top is-success">
      <div className="navbar-brand">
      <a className="navbar-item">
          <div className="is-flex ">
            <h1 className="is-size-3 has-text-weight-bold">Nelp</h1>
          </div>
        </a>
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
