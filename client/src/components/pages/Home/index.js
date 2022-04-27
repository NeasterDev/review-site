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

  // <Review key={review.savedReviews._id} reviewText={review.savedReviews.reviewText} username={review.savedReviews.username} rating={review.savedReviews.rating}/>
  // console.log("DATA");
  // console.log(data);
  // console.log(data.users[48].savedReviews[0]._id);
  return (
    <div className="homepage">
      {data.users.map(user => {
        if (user.savedReviews.length) {
          // console.log("user id");
          // console.log(user.savedReviews._id)
          return user.savedReviews.map(review => {
            // console.log(review._id);
            // console.log(review.username);
            // console.log(review.reviewText);
            return (
              <Review key={review._id} reviewText={review.reviewText} username={review.username} rating={review.rating}/>
            )
          });

        }
      })}
    </div>
  );
}