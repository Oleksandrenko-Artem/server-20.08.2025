const createError = require('http-errors');

module.exports.validateUser = (userSchema) => async (req, res, next) => {
    try {
        req.body = await userSchema.validate(req.body);
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};