import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ME } from "../../../utils/query";
import { Review } from "../../Review";
import { EditReview } from "../../EditReview";
import { ImageDisplay } from "../../ImageDisplay";

export const Profile = () => {
  const [imageLinks, setImageLinks] = useState([""]);

  const [reviewId, setReviewId] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [reviewText, setReviewText] = useState("");

  const { loading, error, data } = useQuery(QUERY_GET_ME);

  if (loading) return "Loading...";
  if (error) return `Error... ${error}`;

  console.log(data);

  const handleEditReview = (e) => {
    const editReviewEl = document.querySelector(".edit-container");
    // get the relative review id
    const editId = e.target.parentElement.parentElement.getAttribute("edit-id");
    const ratingVal = e.target.parentElement.parentElement.getAttribute(
      "data-rating"
    );
    const locationVal = e.target.parentElement.parentElement.getAttribute(
      "data-location"
    );
    const reviewTextVal = e.target.parentElement.parentElement.getAttribute(
      "data-review-text"
    );
    console.log(editId);
    editReviewEl.classList.toggle("is-hidden");

    setRating(ratingVal);
    setLocation(locationVal);
    setReviewText(reviewTextVal);
    setReviewId(editId);
    return { rating, location, reviewText, reviewId };
  };

  return (
    <div className="container mt-5r mb-4">
      <ImageDisplay
        imageLinks={imageLinks}
        setImageLinks={setImageLinks}
      ></ImageDisplay>
      <EditReview
        reviewId={reviewId}
        ratingVal={rating}
        locationVal={location}
        reviewTextVal={reviewText}
      ></EditReview>
      <div className="title has-text-centered-mobile">Your Reviews</div>
      {data.me.savedReviews.map((review) => {
        if (review) {
          return (
            <Review
              key={review._id}
              editId={review._id}
              location={review.location}
              reviewText={review.reviewText}
              username={review.username}
              rating={review.rating}
              handleEditReview={handleEditReview}
              imageUrls={review.imageUrls}
              setImageLinks={setImageLinks}
            />
          );
        }
        return null;
      })}
    </div>
  );
};
