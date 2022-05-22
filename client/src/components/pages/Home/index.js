import React, { useState } from "react";
// componenets
import { Review } from "../../Review";
import { Hero } from "../../Hero";
import { ImageDisplay } from "../../ImageDisplay";

import { GET_REVIEWS } from "../../../utils/query";
import { useQuery } from "@apollo/client";


const Home = (props) => {
  const [imageLinks, setImageLinks] = useState([""]);

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
                setImageLinks={setImageLinks}
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
            if (review.location.toLowerCase().includes(location.toLocaleLowerCase())) {
              return (
                <Review
                  key={review._id}
                  location={review.location}
                  reviewText={review.reviewText}
                  username={review.username}
                  rating={review.rating}
                  imageUrls={review.imageUrls}
                  setImageLinks={setImageLinks}
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
      <ImageDisplay imageLinks={imageLinks} setImageLinks={setImageLinks}></ImageDisplay>
      <div className="container mt-2">
        {render(data, props.location)}
      </div>
      <div className="is-flex is-justify-content-center icon-link">
        <a className="is-size-7" href="https://icons8.com/icon/97659/image-gallery">Image Gallery icon by Icons8</a>
      </div>
    </div>
  );
};

export default Home;


// Steps to complete image container
// Add button to display images
// When the button is clicked it gets the links for the images 
// render the imagedisplay with the images from the links
