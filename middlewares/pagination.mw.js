const createError = require('http-errors');

module.exports.paginate = (req, res, next) => {
    try {
        const { page, amount } = req.query;
        const limit = Number(amount) > 0 ? Number(amount) : 5;
        const skip = Number(page) > 0 ? (page - 1) * limit : 0;
        req.pagination = { limit, skip };
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};