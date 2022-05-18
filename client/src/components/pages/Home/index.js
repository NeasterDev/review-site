import React, { useState } from "react";
// componenets
import { Review } from "../../Review";
import { Hero } from "../../Hero";
import { ImageDisplay } from "../../ImageDisplay";

import { GET_REVIEWS } from "../../../utils/query";
import { useQuery } from "@apollo/client";


const Home = (props) => {
  const [imageLinks, setImageLinks] = useState([
    "https://nelp-images-bucket.s3.us-west-1.amazonaws.com/ef0192a8447c9ad7bcf99eee92e70bdd",
    "https://nelp-images-bucket.s3.us-west-1.amazonaws.com/93138cc711b0481e26a8b3434bc1e6ec",
    "https://nelp-images-bucket.s3.us-west-1.amazonaws.com/635539f8d3d4a9a663d70e4a44d6d43b"
  ]);

  const { loading, error, data } = useQuery(GET_REVIEWS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);
  console.log({props});



  // renders reviews based on if the user searched a location
  const render = (data, location = "") => {
    if (!location) {
      return (
        <>
          {data.reviews.map((review) => {
          //  console.log(review);
            return (
              <Review
                key={review._id}
                location={review.location}
                reviewText={review.reviewText}
                username={review.username}
                rating={review.rating}
                imageUrls={review.imageUrls}
              />
            );
          })}
        </>
      )    
    } else {
      return (
        <>
          {data.reviews.map((review) => {
          //  console.log(review);
            if (review.location.toLowerCase() === location.toLocaleLowerCase()) {
              return (
                <Review
                  key={review._id}
                  location={review.location}
                  reviewText={review.reviewText}
                  username={review.username}
                  rating={review.rating}
                  imageUrls={review.imageUrls}
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
      <ImageDisplay imageLinks={imageLinks} ></ImageDisplay>
      <div className="container mt-2">
        {render(data, props.location)}
      </div>
    </div>
  );
};

export default Home;


// Steps to complete image container
// Add button to display images
// When the button is clicked it gets the links for the images 
// render the imagedisplay with the images from the links
