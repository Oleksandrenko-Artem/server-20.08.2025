const yup = require('yup');

const bookSchemaPost = yup.object({
    title: yup.string().trim().min(3).max(125).required(),
    author: yup.string().trim().min(5).max(64).required(),
    genre: yup.string().trim().oneOf(["Fiction", "Non-fiction", "Fantasy", "Science Fiction", "Mystery", "Biography", "History"]).required(),
    year: yup.number().min(700).max(new Date().getFullYear()).required(),
    available: yup.boolean().optional(),
});

const bookSchemaUpdate = yup.object({
    title: yup.string().trim().min(3).max(125),
    author: yup.string().trim().min(5).max(64),
    genre: yup.string().trim().oneOf(["Fiction", "Non-fiction", "Fantasy", "Science Fiction", "Mystery", "Biography", "History"]),
    year: yup.number().min(700).max(new Date().getFullYear()),
    available: yup.boolean().optional(),
});

const bookSchemaQuery = yup.object({
    title: yup.string().trim().min(1).max(125),
    author: yup.string().trim().min(1).max(64),
    genre: yup.string().trim().min(1).max(64),
    available: yup.string().trim().oneOf(['yes', 'no']),
    minYear: yup.number().min(700).max(new Date().getFullYear()),
    maxYear: yup.number().min(700).max(new Date().getFullYear()),
});

module.exports = { bookSchemaPost, bookSchemaUpdate, bookSchemaQuery };