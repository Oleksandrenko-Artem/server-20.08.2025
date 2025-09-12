const mongoose = require('mongoose');
const CONSTANTS = require('../constants');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: CONSTANTS.BOOK_TITLE_MIN,
        maxLength: CONSTANTS.BOOK_TITLE_MAX,
    },
    author: {
        type: String,
        required: true,
        trim: true,
        minLength: CONSTANTS.BOOK_AUTHOR_MIN,
        maxLength: CONSTANTS.BOOK_AUTHOR_MAX,
    },
    genre: {
        type: String,
        required: true,
        trim: true,
        enum: CONSTANTS.BOOK_LIST_GENRE,
    },
    year: {
        type: Number,
        required: true,
        min: CONSTANTS.BOOK_MIN_YEAR,
        max: new Date().getFullYear(),
    },
    available: {
        type: Boolean,
        default: true,
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;