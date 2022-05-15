import React from "react";
// componenets
import { Review } from "../../Review";
import { Hero } from "../../Hero";

import { GET_REVIEWS } from "../../../utils/query";
import { useQuery } from "@apollo/client";


const Home = (props) => {
  const { loading, error, data } = useQuery(GET_REVIEWS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);
  console.log({props});

  const render = (data, location = "") => {
    if (!location) {
      return (
        <>
          {data.reviews.map((review) => {
            console.log(review);
            return (
              <Review
                key={review._id}
                location={review.location}
                reviewText={review.reviewText}
                username={review.username}
                rating={review.rating}
              />
            );
          })}
        </>
      )    
    } else {
      return (
        <>
          {data.reviews.map((review) => {
            console.log(review);
            if (review.location.toLowerCase() === location.toLocaleLowerCase()) {
              return (
                <Review
                  key={review._id}
                  location={review.location}
                  reviewText={review.reviewText}
                  username={review.username}
                  rating={review.rating}
                />
              );
            }
            return null;
          })}
        </>
      )  
    }
  };

  return (
    <div className="mb-8">
      <Hero></Hero>
      <div className="container mt-2">
        {render(data, props.location)}
      </div>
    </div>
  );
};

export default Home;
