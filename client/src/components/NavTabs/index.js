import React from "react";

import Auth from "../../utils/auth";

import AutoComplete from "../Autocomplete";


function NavTabs({location, handleLocation}) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handleBurgerClick = (e) => {
    e.preventDefault();
    const burger = document.querySelector(".navbar-menu");
    burger.classList.toggle("is-active");
  };

  const handleAddReview = (e) => {
    const addReviewEl = document.querySelector('.write-container');
    addReviewEl.classList.toggle('is-hidden');
  }

  const handleSignUp = (e) => {
    const signUpEl = document.querySelector('.sign-up-container');
    const loginEl = document.querySelector('.login-container');
    if (!loginEl.classList.contains('is-hidden')) {
      loginEl.classList.toggle('is-hidden');
    }
    signUpEl.classList.toggle('is-hidden');
  }

  const handleLogin = (e) => {
    const loginEl = document.querySelector('.login-container');
    const signUpEl = document.querySelector('.sign-up-container');
    if (!signUpEl.classList.contains('is-hidden')) {
      signUpEl.classList.toggle('is-hidden');
    }
    loginEl.classList.toggle('is-hidden');
  }


  return (
    <section className="section">
      <nav className="navbar main-bg-color is-fixed-top mb-10 opacity-70">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <div className="is-flex ">
              <h1 className="is-size-3 has-text-weight-bold">Nelp</h1>
            </div>
          </a>

          <a
            href="?"
            role="button"
            className="navbar-burger my-auto"
            aria-label="menu"
            aria-expanded="false"
            onClick={handleBurgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <div className="navbar-item">
            <form onSubmit={handleLocation} id="search-form">
              <div className=" is-flex-desktop is-flex-tablet">
                <AutoComplete  />
                <button className="button is-hidden-mobile" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            {Auth.loggedIn() ? (
              <>
                <a className="navbar-item" href="#add-review" onClick={
                  handleAddReview
                }>
                  Add Review
                </a>
                <a className="navbar-item" href="/profile">
                  Profile
                </a>
                <a className="navbar-item" href="/" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <a className="navbar-item" href="#login" onClick={
                  handleLogin
                }>
                  Login
                </a>
                <a className="navbar-item" href="#signup" onClick={
                  handleSignUp
                }>
                  Signup
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavTabs;
