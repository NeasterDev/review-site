import React from "react";

import "./style.css";

import Auth from "../../utils/auth";

import AutoComplete from "../Autocomplete";
const nationalParks = [
  "Acadia National Park",
  "Arches National Park",
  "Badlands National Park",
  "Big Bend National Park",
  "Biscayne National Park",
  "Black Canyon of the Gunnison National Park",
  "Bryce Canyon National Park",
  "Canyonlands National Park",
  "Capitol Reef National Park",
  "Carlsbad Caverns National Park",
  "Channel Islands National Park",
  "Congaree National Park",
  "Crater Lake National Park",
  "Cuyahoga Valley National Park",
  "Death Valley National Park",
  "Denali National Park and Preserve",
  "Dry Tortugas National Park",
  "Everglades National Park",
  "Gates of the Arctic National Park",
  "Gateway Arch National Park",
  "Glacier National Park",
  "Glacier Bay National Park",
  "Grand Canyon National Park",
  "Grand Teton National Park",
  "Great Basin National Park",
  "Great Sand Dunes National Park and Preserve",
  "Great Smoky Mountains National Park",
  "Guadalupe Mountains National Park",
  "Haleakala National Park",
  "Hawaii Volcanoes National Park",
  "Hot Springs National Park",
  "Indiana Dunes National Park",
  "Isle Royale National Park",
  "Joshua Tree National Park",
  "Katmai National Park and Preserve",
  "Kenai Fjords National Park",
  "Kings Canyon National Park",
  "Kobuk Valley National Park",
  "Lake Clark National Park",
  "Lassen Volcanic National Park",
  "Mammoth Cave National Park",
  "Mesa Verde National Park",
  "Mount Rainier National Park",
  "National Park of American Samoa",
  "New River Gorge National Park",
  "North Cascades National Park",
  "Olympic National Park",
  "Petrified Forest National Park",
  "Pinnacles National Park",
  "Redwood National Park",
  "Rocky Mountain National Park",
  "Saguaro National Park",
  "Sequoia National Park",
  "Shenandoah National Park",
  "Theodore Roosevelt National Park",
  "Virgin Islands National Park",
  "Voyageurs National Park",
  "White Sands National Park",
  "Wind Cave National Park",
  "Wrangell-St. Elias National Park and Preserve",
  "Yellowstone National Park",
  "Yosemite National Park",
  "Zion National Park",
];

function NavTabs({location, handleLocation}) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handleBurgerClick = (e) => {
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
