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
        

      return users;
    },

    reviews: async (parent, {location}) => {
      const users = await User.find({}).select('savedReviews');
      const userData = users.map(savedReviews => savedReviews);
      //console.log(userData);
      let reviews = [];
      userData.forEach(user => {
        user.savedReviews.map(review => {
          //console.log(review);
          if (location) {
            if (review.location.toLowerCase() === location.toLowerCase()) {
              reviews.push(review);
              return review;
            }
          } else {
            reviews.push(review);
            return review;
          }

        })
      })
      //console.log(reviews);
      reviews.sort((a, b) => b.createdAt - a.createdAt);
      //console.log(reviews);
      return reviews;
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
        const { rating, reviewText, location, imageUrls } = args;
        console.log(args);
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          // prevent duplicate saves by using $addToSet instead of $push
          {
            $push: {
              savedReviews: {
                reviewText: reviewText,
                rating: rating,
                username: context.user.username,
                location: location,
                imageUrls: imageUrls,
                userId: context.user._id
              },
            },
          },
          { new: true }
        );
        console.log(user);
        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // edit reviews
    editReview: async (parent, args, context) => {
      let set;
      if (args.reviewText) { 
        if (args.rating) {
          if (args.location) {
            set = { $set: { "savedReviews.$.reviewText": args.reviewText, "savedReviews.$.rating": args.rating, "savedReviews.$.location": args.location }}
          } else {
            set = { $set: { "savedReviews.$.reviewText": args.reviewText, "savedReviews.$.rating": args.rating }}
          }
        } else {
          set = { $set: { "savedReviews.$.reviewText": args.reviewText }} 
        }
      }

      if (args.rating) { 
        if (args.reviewText) {
          if (args.location) {
            set = { $set: { "savedReviews.$.reviewText": args.reviewText, "savedReviews.$.rating": args.rating, "savedReviews.$.location": args.location }}
          } else {
            set = { $set: { "savedReviews.$.reviewText": args.reviewText, "savedReviews.$.rating": args.rating }}
          }
        } else {
          set = { $set: { "savedReviews.$.rating": args.rating }} 
        }
      }

      if (args.location) { 
        if (args.reviewText) {
          if (args.location) {
            set = { $set: { "savedReviews.$.reviewText": args.reviewText, "savedReviews.$.rating": args.rating, "savedReviews.$.location": args.location }}
          } else {
            set = { $set: { "savedReviews.$.reviewText": args.reviewText, "savedReviews.$.location": args.location }}
          }
        } else {
          set = { $set: { "savedReviews.$.location": args.location }} 
        }
      } 

      if (context.user) {
        const user = await User.findOneAndUpdate(
          {"_id": context.user._id, "savedReviews._id": args._id},
          // use $ positional operator to reference queried index
          set,
          {  new: true, runValidators: true, omitUndefined: true},
        ).select('savedReviews')

        console.log(user);
        return user.savedReviews.id(args._id);
      }
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

    // // mutations for voting 

    likeReview: async (parent, args, context) => {
      if (context.user) {
        let isLiked = false;
        let isDisliked = false
        const user = await User.findOne({_id: context.user._id});
        //console.log(user);
        // checking if the user has liked the review already
        user.likedReviews.forEach(likedReview => {
          if (likedReview === args.review_id) {
            // the review has been liked already
            isLiked = true;
            return;
          }
          return;
        });

        user.dislikedReviews.forEach(dislikedReview => {
          if (dislikedReview === args.review_id) {
            // the review has been liked already
            isDisliked = true;
            return;
          }
          return;
        });
        
        // if the review is not liked
        // add the review to the liked reviews
        if (!isLiked) {
          // if they are liking a review they already disliked, remove the dislike
          if (isDisliked) {
            await User.findOneAndUpdate(
              { _id: args.user_id, "savedReviews._id": args.review_id },
              // increment the value by 1
              { $inc: { "savedReviews.$.downvotes": -1 }},
              { new: true }
            );
  
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { dislikedReviews: args.review_id}},
              { new: true }
            )
          }
          // if they like the review, +1 upvote
          await User.findOneAndUpdate(
            { _id: args.user_id, "savedReviews._id": args.review_id },
            // increment the value by 1
            { $inc: { "savedReviews.$.upvotes": 1 }},
            { new: true }
          );

          const userUpdate = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $push: { likedReviews: args.review_id}},
            { new: true }
          )
          

          return userUpdate;
          // if the review has already been liked and they click it again
          // then remove the like
        } else {
          if (isDisliked) {
            await User.findOneAndUpdate(
              { _id: args.user_id, "savedReviews._id": args.review_id },
              // increment the value by 1
              { $inc: { "savedReviews.$.downvotes": -1 }},
              { new: true }
            );
  
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { dislikedReviews: args.review_id}},
              { new: true }
            )
          }
          // if they unlike the review, -1 upvotes
          await User.findOneAndUpdate(
            { _id: args.user_id, "savedReviews._id": args.review_id },
            // increment the value by 1
            { $inc: { "savedReviews.$.upvotes": -1 }},
            { new: true }
          );

          const userUpdate = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { likedReviews: args.review_id}},
            { new: true }
          )

          return userUpdate;
        }
      }
    },
    dislikeReview: async (parent, args, context) => {
      if (context.user) {
        let isDisliked = false;
        let isLiked = false;
        const user = await User.findOne({_id: context.user._id});
        //console.log(user);
        // checking if the user has liked the review already
        user.dislikedReviews.forEach(dislikedReview => {
          if (dislikedReview === args.review_id) {
            // the review has been liked already
            isDisliked = true;
            return;
          }
          return;
        });

        user.likedReviews.forEach(likedReview => {
          if (likedReview === args.review_id) {
            // the review has been liked already
            isLiked = true;
            return;
          }
          return;
        });
        // if the review is not liked
        // add the review to the liked reviews
        if (!isDisliked) {
          // if they are disliking a post that they already liked, remove the like
          if (isLiked) {
            await User.findOneAndUpdate(
              { _id: args.user_id, "savedReviews._id": args.review_id },
              // increment the value by 1
              { $inc: { "savedReviews.$.upvotes": -1 }},
              { new: true }
            );
  
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { likedReviews: args.review_id}},
              { new: true }
            )
          }
          // if they disliked the review, downvotes +1
          await User.findOneAndUpdate(
            { _id: args.user_id, "savedReviews._id": args.review_id },
            { $inc: { "savedReviews.$.downvotes": 1 }},
            { new: true }
          );

          const userUpdate = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $push: { dislikedReviews: args.review_id}},
            { new: true }
          )

          return userUpdate;
          // if the review has already been liked and they click it again
          // then remove the like
        } else {
          // if they are disliking a post that they already liked, remove the like
          if (isLiked) {
            await User.findOneAndUpdate(
              { _id: args.user_id, "savedReviews._id": args.review_id },
              // increment the value by 1
              { $inc: { "savedReviews.$.upvotes": -1 }},
              { new: true }
            );
  
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { likedReviews: args.review_id}},
              { new: true }
            )
          }
          // if they already disliked the review, downvotes -1
          await User.findOneAndUpdate(
            { _id: args.user_id, "savedReviews._id": args.review_id },
            { $inc: { "savedReviews.$.downvotes": -1 }},
            { new: true }
          );

          const userUpdate = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { dislikedReviews: args.review_id}},
            { new: true }
          )

          return userUpdate;
        }
      }
    },
  },
};

module.exports = resolvers;
