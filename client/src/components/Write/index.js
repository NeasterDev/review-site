import React, {useState} from 'react';
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_GET_ME } from '../../utils/query';

// review form
export default function Write() {
  
  const [reviewText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview }}) {

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
        console.warn("First thought insertion by user!")
      }

      // update review array's cache
      const { me } = cache.readQuery({ query: QUERY_GET_ME });
      cache.writeQuery({
        query: QUERY_GET_ME,
        data: { me: { ...me, reviews: [...me.reviews, addReview] } }
      });
    }
  });

  const handleChange = event => {
    if (event.target.value.length <= 1000) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
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
  };
  console.log(reviewText);
  
  return (
    <div className="write">
        <h1>Write</h1>
        <p className={`${characterCount === 1000 ? 'text-error' : ''}`}>
          Character Count: {characterCount}/1000
          {error && <span>Something went wrong...</span>}
        </p>
        <form onSubmit={handleFormSubmit}>
          <textarea
          value={reviewText}
          onChange={handleChange}
          ></textarea>
          <button type="submit">
            Submit
          </button>
        </form>
    </div>
  );
}