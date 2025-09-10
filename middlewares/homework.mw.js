const createError = require('http-errors');

module.exports.validateHomework = (homeworkSchema) => async (req, res, next) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return next(createError(400, 'Data not exists'));
        }
        req.body = await homeworkSchema.validate(req.body);
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.validateHomeworkQuery = (queryHomeworkSchema) => async (req, res, next) => {
    try {
        req.query = await queryHomeworkSchema.validate(req.query);
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};