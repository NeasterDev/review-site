import React, { useState } from "react";
import AutoComplete from "../Autocomplete";
import { useMutation } from "@apollo/client";
import { EDIT_REVIEW } from "../../utils/mutations";

// review form
export const EditReview = ({ reviewId, ratingVal, locationVal, reviewTextVal }) => {
  const [editReview, { loading, error, reset }] = useMutation(EDIT_REVIEW);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1);
  const [location, setLocation] = useState("");

  if (loading) return "Review Submitted";
  if (error) return `Submission error! ${error.message}`;

  const handleLocationChange = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
  };

  const handleReviewChange = (e) => {
    console.log(e.target.value);
    setReviewText(e.target.value);
  };

  const handleRatingChange = (e) => {
    console.log(e.target.value);
    setRating(parseInt(e.target.value));
  };

  const handleEditReviewClose = (e) => {
    const editReviewEL = document.querySelector(".edit-container");
    editReviewEL.classList.toggle("is-hidden");
  };

  const handleEditReviewSubmit = (e) => {
    e.preventDefault();
    editReview({ variables: { id: reviewId, reviewText, rating, location } });
    // used so that the editreview element is not removed after submission
    reset();
    handleEditReviewClose();
  };

  return (
    <div className="write-position is-hidden write-bg edit-container mobile-p">
      <div className="is-flex is-justify-content-space-between">
        <h1 className="title mobile-title">Edit Review</h1>
        <button className="delete" onClick={handleEditReviewClose}></button>
      </div>

      <form
        className="is-flex is-flex-direction-column"
        onSubmit={handleEditReviewSubmit} 
      >
      <div className="mb-1">
        <AutoComplete change={handleLocationChange} val={locationVal}/>
      </div>
      
      <textarea
        className=" textarea mb-1"
        onChange={handleReviewChange}
        placeholder="Add review text here..."
        defaultValue={reviewTextVal}
      ></textarea>
      <select className="select mb-1" onChange={handleRatingChange}>
        <option value={ratingVal}>{ratingVal}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit" className="button">
          Submit
      </button>
    </form>

    </div>
  );
};
