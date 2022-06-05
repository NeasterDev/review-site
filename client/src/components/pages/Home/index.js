import React, { useState } from "react";
// componenets
import { Review } from "../../Review";
import { Hero } from "../../Hero";
import { ImageDisplay } from "../../ImageDisplay";

import { GET_REVIEWS, QUERY_GET_ME } from "../../../utils/query";
import { useQuery, NetworkStatus } from "@apollo/client";


const Home = (props) => {
  const [imageLinks, setImageLinks] = useState([""]);

  const { loading, error, data, refetch } = useQuery(GET_REVIEWS);
  const { loading: meLoading, data: currentUserData, networkStatus } = useQuery(QUERY_GET_ME, { notifyOnNetworkStatusChange: true});

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return "Loading...";
  if (meLoading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);
  console.log({props});



  // renders reviews based on if the user searched a location
  const render = (data, location = "") => {
    let liked = ""
    let disliked = "";
    if (!location) {
      return (
        <>
          {data.reviews.map((review) => {
            currentUserData.me.likedReviews.forEach(likedReview => {
              if (likedReview === review._id) {
                liked = "upvote-active";
              }
            
            });

            currentUserData.me.dislikedReviews.forEach(dislikedReview => {
              if (dislikedReview === review._id) {
                disliked = "downvote-active";
              }
            });
            
            return (
              <Review
                key={review._id}
                reviewId={review._id}
                location={review.location}
                reviewText={review.reviewText}
                username={review.username}
                rating={review.rating}
                imageUrls={review.imageUrls}
                setImageLinks={setImageLinks}
                userId={review.userId}
                upvotes={review.upvotes}
                downvotes={review.downvotes}
                refetch={refetch}
                
                liked={liked}
                disliked={disliked}
              />
            );
          })}
        </>
      )    
    } else {
      return (
        <>
          {data.reviews.map((review) => {
            currentUserData.me.likedReviews.forEach(likedReview => {
              if (likedReview === review._id) {
                liked = true;
              }
            
            });

            currentUserData.me.dislikedReviews.forEach(dislikedReview => {
              if (dislikedReview === review._id) {
                disliked = true;
              }
            });
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
                  userId={review.userId}
                  upvotes={review.upvotes}
                  downvotes={review.downvotes}
                  refetch={refetch}
                  liked={liked}
                  disliked={disliked}

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
