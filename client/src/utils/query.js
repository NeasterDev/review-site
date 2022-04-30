import { gql } from "@apollo/client";

export const QUERY_GET_ME = gql`
  query Me {
    me {
      username
      _id
      savedReviews {
        reviewText
        location
        rating
        _id
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($User: String) {
    _id
    username
    email
    savedReviews {
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
