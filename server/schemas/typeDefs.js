// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        savedReviews: [Review]
    }

    type Review {
        review_text: String
        rating: String
        username: String
        reviewId: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, password: String!): Auth
        login(password: String!): Auth
        updateUser(username: String!, password: String!): Auth
        removeUser(username: String!, password: String!): Auth
        addReview(username: String!, password: String!): Auth
        deleteReview(username: String!, password: String!): Auth
    }
`;

// export the typeDefs
module.exports = typeDefs;