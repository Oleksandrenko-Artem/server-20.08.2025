const createError = require('http-errors');
const Book = require('../models/Book');

module.exports.createBook = async (req, res, next) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).send({ data: newBook });
    } catch (error) {
        next(error);
    }
};

module.exports.findAllBooks = async (req, res, next) => {
    try {
        const { limit, skip } = req.pagination;
        const books = await Book.find(req.filter).skip(skip).limit(limit);
        res.status(200).send({ data: books });
    } catch (error) {
        next(error);
    }
};

module.exports.findBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.idBook);
        if (!book) {
            return next(createError(404, 'Book not found'));
        }
        res.status(200).send({ data: book });
    } catch (error) {
        next(error);
    }
};

module.exports.updateBookById = async (req, res, next) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.idBook, req.body, { new: true });
        if (!updatedBook) {
            return next(createError(404, 'Book not found'));
        }
        res.status(200).send({ data: updatedBook });
    } catch (error) {
        next(error);
    }
};

module.exports.deleteBookById = async (req, res, next) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.idBook);
        if (!deletedBook) {
            return next(createError(404, 'Book not found'));
        }
        res.status(200).send({ data: deletedBook });
    } catch (error) {
        next(error);
    }
};