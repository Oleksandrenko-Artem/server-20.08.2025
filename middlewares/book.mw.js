const createError = require('http-errors');

module.exports.validateBook = (bookSchema) => async (req, res, next) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return next(createError(400, 'Data not exists'));
        }
        req.body = await bookSchema.validate(req.body);
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.validateBookQuery = (queryBookSchema) => async (req, res, next) => {
    try {
        req.query = await queryBookSchema.validate(req.query);
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.buildBooksFilter = async (req, res, next) => {
    try {
        const { title, author, genre, minYear, maxYear, available } = req.query;
        req.filter = {};
        if (title) {
            req.filter.title = new RegExp(title, 'i');
        }
        if (author) {
            req.filter.author = new RegExp(author, 'i');
        }
        if (genre) {
            req.filter.genre = new RegExp(genre, 'i');
        }
        if (minYear || maxYear) {
            req.filter.year = {};
            if (minYear) {
                req.filter.year.$gte = Number(minYear);
            }
            if (maxYear) {
                req.filter.year.$lt = Number(maxYear);
            }
        }
        if (available) {
            req.filter.available = available === 'yes';
        }
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};