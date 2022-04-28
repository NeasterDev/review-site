import React from 'react';
import './style.css';

import Auth from '../../utils/auth';

function NavTabs() {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <header className="has-background-success">
      <div>
        <a href="/">
          <h1 className="has-text-centered has-text-weight-bold is-size-3 has-text-black">Campsite</h1>
        </a>

        <nav className="has-text-centered is-size-4">
        {Auth.loggedIn() ? (
              <>
                <a href="/profile">Profile</a>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
              </>
            )}
        </nav>
      </div>
    </header>
  );
}

export default NavTabs;