// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        savedReviews: [Review]
        likedReviews: [String]
        dislikedReviews: [String]
    }

    type Review {
        _id: ID
        reviewText: String
        rating: Int
        location: String
        username: String
        createdAt: String
        imageUrls: [String]
        userId: ID
        upvotes: Int
        downvotes: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        reviews(location: String): [Review]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(username: String, email: String): User
        removeUser(_id: ID!): Auth
        addReview(reviewText: String!, rating: Int!, location: String!, imageUrls: [String]): User
        deleteReview(_id: ID!): User
        editReview(_id: ID!, reviewText: String, rating: Int, location: String): Review
        likeReview(user_id: ID!, review_id: ID!): User
        dislikeReview(user_id: ID!, review_id: ID!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;
