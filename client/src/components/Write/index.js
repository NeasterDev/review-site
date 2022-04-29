<<<<<<< HEAD
import React, { useState } from 'react';
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_GET_ME } from '../../utils/query';

// review form
export default function Write() {
  const [reviewText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
=======
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
>>>>>>> 50d87384e4443f3329f58510e742afa7dfd1039f

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

<<<<<<< HEAD
      // wrap in try in case review doesn't exist yet
      try {
        //read current cache items
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS }); 

        // prepend the newest review to the front of the array
        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addReview, ...reviews] }
        });
      }
      catch (e) {
        console.error(e);
      }

      // update review array's cache
      const { me } = cache.readQuery({ query: QUERY_GET_ME });
      cache.writeQuery({
        query: QUERY_GET_ME,
        data: { me: { ...me, reviews: [...me.reviews, addReview] } }
      });
    }
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 1000) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // add review to database
      await addReview({
        variables: { reviewText }
      });
  
      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
=======
  const handleLocationChange = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
  };

  const handleReviewChange = (e) => {
    console.log(e.target.value);
    setReviewText(e.target.value);
>>>>>>> 50d87384e4443f3329f58510e742afa7dfd1039f
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
