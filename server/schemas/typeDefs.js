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
        review_text: String
        rating: Int
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(username: String!, password: String!): Auth
        removeUser(username: String!, password: String!): Auth
        addReview(username: String!, password: String!): Auth
        deleteReview(username: String!, password: String!): Auth
    }
`;

// export the typeDefs
module.exports = typeDefs;