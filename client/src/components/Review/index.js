import React from "react";
import { Route } from 'react-router-dom';

export const Review = ({ location, rating, reviewText, username }) => {
  // const lorem =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor at sem sed facilisis. Vivamus congue arcu dolor, in ornare enim pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse fermentum lectus eget hendrerit sodales. Aliquam bibendum tortor sem, id placerat nunc fermentum.";

  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "★";
  }



  return (
    <div className="box" data-location={location}>
      <div className=" is-size-6 is-italic has-text-weight-medium">
        {location}
      </div>
      <div className="is-flex ">
        <div className="rev-max-description">{reviewText}</div>
      </div>
      <div>Rating {stars}</div>
      <div>{username}</div>
      <Route exact path='/profile'>
        <div className="is-flex is-justify-content-end">
            <button className="button">Edit</button>
        </div>
      </Route>

    </div>
  );
};
