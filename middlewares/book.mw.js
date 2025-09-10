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