import React from 'react';
import { gql, useQuery } from "@apollo/client";
//import './style.css'
import {Review} from '../../Review';

export default function Home() {

  const GET_REVIEWS = gql`
    query reviews {
      users {
        savedReviews {
          reviewText
          _id
          username
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_REVIEWS);
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const users = data.users.map(review => console.log(review))
  console.log(users);
  // <Review key={review.savedReviews._id} reviewText={review.savedReviews.reviewText} username={review.savedReviews.username} rating={review.savedReviews.rating}/>
  return (
    <div className="homepage">
    </div>
  );
}