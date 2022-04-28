import { gql } from '@apollo/client';

export const QUERY_GET_ME= gql`
  query me($User: String) {
   me (User:$User){
     _id
     username
     email
     savedReviews{
       _id
       reviewText
       rating
       username
     }   
    } 
  }
`;

export const QUERY_USER= gql`
  query user($User: String) {
    _id
     username
     email
     savedReviews{
       _id
       reviewText
       rating
       username
     }
         
    } 
  
`;

export const QUERY_REVIEW = gql`
  query review($Review: String) {
       _id
       reviewText
       rating
       username  
    
  }
`;

export const QUERY_REVIEWS = gql`
  query reviews($username: String) {
    reviews(username: $username) {
      _id
      reviewText
      rating
      username
    }
  }
`;

export const GET_REVIEWS = gql`
  query reviews {
    users {
      username
      savedReviews {
        reviewText
        _id
        username
        rating
        location
      }
    }
  }
`;