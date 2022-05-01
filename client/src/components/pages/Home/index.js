import React, { useEffect, useState } from 'react';
import './style.css'
// componenets
import {Review} from '../../Review';
import { Hero } from '../../Hero';
import AutoComplete from '../../Autocomplete';

import { GET_REVIEWS } from '../../../utils/query';
import  { useQuery }  from '@apollo/client';


const Home = () => {

  const [userData, setUserData] = useState({});
  const { loading, error, data } = useQuery(GET_REVIEWS);
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;


  console.log(userData);
  return (
    <div className="homepage mb-8">
      <Hero></Hero>
      {data.users.map(user => {
        if (user.savedReviews.length) {
          return user.savedReviews.map(review => {
            return (
              <Review key={review._id} location={review.location} reviewText={review.reviewText} username={review.username} rating={review.rating}/>
            )
          });
        }
      })}
    </div>
  );
}

export default Home;