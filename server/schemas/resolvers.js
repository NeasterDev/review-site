const { AuthenticationError } = require("apollo-server-express");
const { User, Review } = require("../models");
const { signToken } = require("../utils/auth");

// create resolver function to each query/mutation that perform CRUD
const resolvers = {
  // perform GET request from GraphQL API
  Query: {
    me: async (parent, args, context) => {
      //console.log(context);
      // permit only logged in users access to query
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password") // omit __v (mongoose specific) and password from seacrh
          .populate("savedReviews");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },

    users: async (parent, args) => {
      const users = await User.find({})
        .select("-password -__v")
        .populate("savedReviews");

      return users;
    },

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
    // accept email and password as parameters
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        // return authentication error if user submits incorrect username or password
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      console.log(token);
      return { token, user };
    },

    // update User (e.g. change username)
    updateUser: async (parent, args, context) => {

      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { username: args.username, email: args.email } },
          { new: true }
        );

        return updatedUser;
      }
    },

    // remove User
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findOneAndDelete({ _id: args });
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    //add Review if user is logged in
    addReview: async (parent, args, context) => {
      // verify that User is logged in
      if (context.user) {
        const {rating, reviewText, location} = args;

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          // prevent duplicate saves by using $addToSet instead of $push
          {
            $push: {
              savedReviews: {
                reviewText: reviewText,
                rating: rating,
                username: context.user.username,
                location: location 
              }
            }
          },
          { new: true }
        );

        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // delete Review if user is logged in
    deleteReview: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedReviews: args } },
          { new: true }
        );

        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
