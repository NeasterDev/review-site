const { Schema, ObjectId, Types } = require('mongoose');
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
// const date = new Date();

const reviewSchema = new Schema({
    reviewText: {
        type: String
    },
    rating: {
        type: Number,

        min: 0,
        max: 5
    },
    location: {
        type: String,

    },
    username: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    imageUrls: [String],
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    userId:{
        type: String
    }
});


module.exports = reviewSchema;