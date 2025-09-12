const yup = require('yup');
const CONSTANTS = require('../constants');

const bookSchemaPost = yup.object({
    title: yup.string().trim().min(CONSTANTS.BOOK_TITLE_MIN).max(CONSTANTS.BOOK_TITLE_MAX).required(),
    author: yup.string().trim().min(CONSTANTS.BOOK_AUTHOR_MIN).max(CONSTANTS.BOOK_AUTHOR_MAX).required(),
    genre: yup.string().trim().oneOf(CONSTANTS.BOOK_LIST_GENRE).required(),
    year: yup.number().min(CONSTANTS.BOOK_MIN_YEAR).max(new Date().getFullYear()).required(),
    available: yup.boolean().optional(),
});

const bookSchemaUpdate = yup.object({
    title: yup.string().trim().min(CONSTANTS.BOOK_TITLE_MIN).max(CONSTANTS.BOOK_TITLE_MAX),
    author: yup.string().trim().min(CONSTANTS.BOOK_AUTHOR_MIN).max(CONSTANTS.BOOK_AUTHOR_MAX),
    genre: yup.string().trim().oneOf(CONSTANTS.BOOK_LIST_GENRE),
    year: yup.number().min(CONSTANTS.BOOK_MIN_YEAR).max(new Date().getFullYear()),
    available: yup.boolean().optional(),
});

const bookSchemaQuery = yup.object({
    title: yup.string().trim().min(CONSTANTS.QUERY_MIN).max(CONSTANTS.BOOK_TITLE_MAX),
    author: yup.string().trim().min(CONSTANTS.QUERY_MIN).max(CONSTANTS.BOOK_AUTHOR_MAX),
    genre: yup.string().trim().min(CONSTANTS.QUERY_MIN).max(CONSTANTS.QUERY_MAX),
    available: yup.string().trim().oneOf(['yes', 'no']),
    minYear: yup.number().min(CONSTANTS.BOOK_MIN_YEAR).max(new Date().getFullYear()),
    maxYear: yup.number().min(CONSTANTS.BOOK_MIN_YEAR).max(new Date().getFullYear()),
});

module.exports = { bookSchemaPost, bookSchemaUpdate, bookSchemaQuery };