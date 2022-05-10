import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String!, $email: String!) {
    updateUser(username: $username, email: $email) {
      token
      user {
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
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($email: String!, $password: String!) {
    removeuser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
mutation addReview($reviewText: String!, $rating: Int!, $location: String!) {
  addReview(reviewText: $reviewText, rating: $rating, location: $location) {
    username
    savedReviews {
      reviewText
      location
      reviewText
    }
  }
}
`;

export const EDIT_REVIEW = gql`
  mutation editReview($id: ID!, $rating: Int, $reviewText: String, $location: String) {
    editReview(_id: $id,  rating: $rating, reviewText: $reviewText, location: $location) {
      _id
      reviewText
      rating
      location
      username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($email: String!, $password: String!) {
    deleteReview(username: $username, email: $email) {
      token
      user {
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
    }
  }
`;
