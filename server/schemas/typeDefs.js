// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        savedReviews: [Review]
    }

    type Review {
        _id: ID,
        reviewText: String
        rating: Int
        location: String
        username: String
        createdAt: String
        imageUrls: [String]
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

    }
`;

// export the typeDefs
module.exports = typeDefs;
