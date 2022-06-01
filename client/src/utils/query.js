import { gql } from "@apollo/client";

export const QUERY_GET_ME = gql`
  query Me {
    me {
      username
      _id
      savedReviews {
        _id
        location
        createdAt
        reviewText
        rating
        username
        imageUrls
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
    reviews {
      _id
      location
      createdAt
      reviewText
      rating
      username
      imageUrls
      userId
    }
  }
`;

export const GET_REVIEWS_BY_LOCATION = gql`
  query reviewsByLocation($location: String) {
    reviews(location: $location) {
      _id
      location
      createdAt
      reviewText
      rating
      username
    }
  }
`;
