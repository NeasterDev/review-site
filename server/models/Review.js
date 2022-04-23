const { Schema } = require('mongoose');

const reviewSchema = new Schema({
    review_text: {
        type: String
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    username: {
        type: String,
        required: true
    }
});


module.export = reviewSchema;