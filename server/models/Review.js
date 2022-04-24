const { SchemaMetaFieldDef } = require('graphql');
const { Schema, Types } = require('mongoose');

const reviewSchema = new Schema({
    reviewText: {
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
    },
    reviewId: {
        type: String,
        required: true,
        default: Types.ObjectId()
    }
});


module.export = reviewSchema;