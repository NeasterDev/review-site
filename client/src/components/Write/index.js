import React, { useState } from "react";
import "./style.css";
import AutoComplete from "../Autocomplete";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../../utils/mutations";
import { QUERY_REVIEWS, QUERY_GET_ME } from "../../utils/query";

// review form
export default function Write() {
  const [addReview, { data, loading, error }] = useMutation(ADD_REVIEW);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1);
  const [location, setLocation] = useState("");

  if (loading) return "Submitting...";
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
    setRating(e.target.value);
  };

  return (
    <div className="write">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addReview({ variables: { reviewText, rating, location } });
        }}
      >
        <AutoComplete change={handleLocationChange} />
        <textarea
          className=" textarea"
          onChange={handleReviewChange}
          placeholder="Add review text here..."
        ></textarea>
        <input
          onChange={handleRatingChange}
          className="input"
          list="stars"
          name="stars"
          placeholder="How many stars?"
        />
        <datalist id="stars">
          <option value="1" />
          <option value="2" />
          <option value="3" />
          <option value="4" />
          <option value="5" />
        </datalist>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}
