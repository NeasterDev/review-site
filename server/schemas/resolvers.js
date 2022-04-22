const { AuthenticationError } = require('apollo-server-express');
const { User, Review } = require('../models');
const { signToken } = require('../utils/auth');

// create resolver function to each query/mutation that perform CRUD
const resolvers = {
    // perform GET request from GraphQL API
    Query: {
        me: async (parent, args, context) => {
            // permit only logged in users access to query
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password') // omit __v (mongoose specific) and password from seacrh
                .populate('savedReviews');
        
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },

    // perform POST, PUT, DELETE request on GraphQL API
    Mutation: {
        // add User
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },

        // allow User login
        login: async (parent, { password }) => {
           const user = await User.findOne({ email });

            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
        },

        // update User
        updateUser: async (parent, args) => {

        },

        // remove User
        removeUser: async (parent, args) => {

        },

        // add Review
        addReview: async (parent, args) => {
            // verify that User is logged in
            if (context.user) {

            }

        },

        // delete Review
        deleteReview: async (parent, args, context) => {
            if (context.user) {

            }
        }
    }
}

module.exports = resolvers;
