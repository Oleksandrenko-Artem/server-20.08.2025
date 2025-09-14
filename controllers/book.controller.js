const createError = require('http-errors');
const Book = require('../models/Book');

module.exports.getTopAuthors = async (req, res, next) => {
    try {
        const { limit } = req.query;
        const limitValid = Number(limit) > 1 ? Number(limit) : 1;
        const topAuthors = await Book.aggregate([
            { $match: req.filter },
            { $group: { _id: "$author", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: limitValid },
        ]);
        res.status(200).send({ data: topAuthors });
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.booksStatistic = async (req, res, next) => {
    try {
        const statistic = await Book.aggregate([
            { $match: req.filter },
            {
                $facet: {
                    countByAvailable: [
                        { $group: { _id: "$available", count: { $sum: 1 } } },
                    ],
                    countByGenre: [
                        { $group: { _id: "$genre", count: { $sum: 1 } } },
                    ],
                    countByAuthor: [
                        { $group: { _id: "$author", count: { $sum: 1 } } },
                    ],
                    yearStatistic: [
                        { $group: { _id: null, minYear: { $min: '$year' }, maxYear: { $max: '$year' } } },
                    ],
                },
            },
        ]);
        statistic[0].countByAvailable = statistic[0].countByAvailable.reduce((acc, item) => {
            item._id ? (acc.available = item.count) : (acc.unavailable = item.count);
            return acc;
        }, { available: 0, unavailable: 0 });
        statistic[0].countByGenre = statistic[0].countByGenre.reduce((acc, item) => {
            acc[item._id] = item.count;
            return acc;
        }, {});
        statistic[0].countByAuthor = statistic[0].countByAuthor.reduce((acc, item) => {
            acc[item._id] = item.count;
            return acc;
        }, {});
        res.status(200).send({ data: statistic });
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.countBooks = async (req, res, next) => {
    try {
        const count = await Book.countDocuments(req.filter);
        res.status(200).send({ data: count });
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.createBook = async (req, res, next) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).send({ data: newBook });
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.findAllBooks = async (req, res, next) => {
    try {
        const { limit, skip } = req.pagination;
        const books = await Book.find(req.filter).skip(skip).limit(limit);
        res.status(200).send({ data: books });
    } catch (error) {
        next(createError(400, error.message));
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
        next(createError(400, error.message));
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
        next(createError(400, error.message));
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
        next(createError(400, error.message));
    }
};