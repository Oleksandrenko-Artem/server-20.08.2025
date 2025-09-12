const createError = require('http-errors');

module.exports.validateUser = (userSchema) => async (req, res, next) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return next(createError(400, 'Data not exists'));
        }
        req.body = await userSchema.validate(req.body);
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.validateUserQuery = (queryUserSchema) => async (req, res, next) => {
    try {
        req.query = await queryUserSchema.validate(req.query);
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.buildUsesFilter = async (req, res, next) => {
    try {
        const { gender, minAge, maxAge, login } = req.query;
        req.filter = {};
        if (gender) {
            req.filter.isMale = gender === 'male';
        }
        if (login) {
            req.filter.login = new RegExp(login);
        }
        if (minAge || maxAge) {
            req.filter.age = {};
            if (minAge) {
                req.filter.age.$gte = Number(minAge);
            }
            if (maxAge) {
                req.filter.age.$lte = Number(maxAge);
            }
        }
        next();
    } catch (error) {
        next(createError(400, error.message));
    }
};