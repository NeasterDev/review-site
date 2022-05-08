import React from 'react';
import { useQuery } from '@apollo/client';
import {QUERY_GET_ME} from '../../../utils/query';
import { Review } from '../../Review';
import { EditReview } from '../../EditReview';

export const Profile = () => {

  const { loading, error, data} = useQuery(QUERY_GET_ME)

  if (loading) return 'Loading...'
  if (error) return `Error... ${error}`;

  console.log(data);

  const handleEditReview = () => {
    const editReviewEl = document.querySelector('.edit-container');
    editReviewEl.classList.toggle('is-hidden');
  }

  return (
    <div className='container mt-5r mb-4'>
      <EditReview></EditReview>
      <div className='title has-text-centered-mobile'>Your Reviews</div>
      {data.me.savedReviews.map(review => {
        if (review) {
          return (
            <Review key={review._id} location={review.location} reviewText={review.reviewText} username={review.username} rating={review.rating} handleEditReview={handleEditReview}/>
          )
        }
        return null;
      })}
    </div>
  )
}
  
