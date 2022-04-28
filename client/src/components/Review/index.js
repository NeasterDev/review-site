import React from "react";


export const Review = ({rating, reviewText, username}) => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor at sem sed facilisis. Vivamus congue arcu dolor, in ornare enim pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse fermentum lectus eget hendrerit sodales. Aliquam bibendum tortor sem, id placerat nunc fermentum.";

  //graphql mutation
  // console.log("REVIEW COMPONENT");
  // console.log(reviewText);
  // console.log(rating);
  // console.log(username);

  return (
    <div className="box">
      <div className=" is-size-6 is-italic has-text-weight-medium">
        {username}
      </div>
      <div className="is-flex ">
        <div className="rev-max-description">{reviewText}</div>
      </div>
      <div>Rating ★★★★★ {rating}</div>
    </div>
  );
};
