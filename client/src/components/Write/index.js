import React, { useState } from "react";
import AutoComplete from "../Autocomplete";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../../utils/mutations";

// review form
export default function Write() {
  const [addReview, { loading, error }] = useMutation(ADD_REVIEW);
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

  const handleAddReview = (e) => {
    const addReviewEl = document.querySelector('.write-container');
    addReviewEl.classList.toggle('is-hidden');
  }

  return (
    <div className="write-position is-hidden write-bg write-container mobile-p">
      <div className='is-flex is-justify-content-space-between'>
        <h1 className="title mobile-title">Add Review</h1>
        <button className='delete' onClick={handleAddReview}></button>
      </div>

      <form
        className="is-flex is-flex-direction-column"
        onSubmit={(e) => {
          e.preventDefault();
          addReview({ variables: { reviewText, rating, location } });
        }}
      >
        <div className='mb-1'>
          <AutoComplete change={handleLocationChange} />
        </div>

        <textarea
          className=" textarea mb-1"
          onChange={handleReviewChange}
          placeholder="Add review text here..."
        ></textarea>
        <select id="stars" onChange={handleRatingChange}>
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
}
