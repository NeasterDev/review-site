import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <h1 className="has-text-centered has-text-weight-bold is-size-3">Campsite</h1>
        </Link>

        <nav class="has-text-centered is-size-4">
        {Auth.loggedIn() ? (
              <>
                <Link to="/profile">Profile</Link>
                <Link to="/write">Write Review</Link>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
        </nav>
      </div>
    </header>
  );
}

export default NavTabs;