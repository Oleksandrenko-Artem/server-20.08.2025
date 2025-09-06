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
        const { title, author, genre, minYear, maxYear, available } = req.query;
        const filter = {};
        if (title) {
            filter.title = new RegExp(title, 'i');
        }
        if (author) {
            filter.author = new RegExp(author, 'i');
        }
        if (genre) {
            filter.genre = new RegExp(genre, 'i');
        }
        if (minYear || maxYear) {
            filter.year = {};
            if (minYear) {
                filter.year.$gte = Number(minYear);
            }
            if (maxYear) {
                filter.year.$lt = Number(maxYear);
            }
        }
        if (available) {
            filter.available = available === 'yes';
        }
        const books = await Book.find(filter);
        res.status(200).send({ data: books });
    } catch (error) {
        next(error);
    }
};

module.exports.findBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.idBook);
        if (!book) {
            return res.status(404).send({ data: 'Book not found' });
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
            return res.status(404).send({ data: 'Book not found' });
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
            return res.status(404).send({ data: 'Book not found' });
        }
        res.status(200).send({ data: deletedBook });
    } catch (error) {
        next(error);
    }
};