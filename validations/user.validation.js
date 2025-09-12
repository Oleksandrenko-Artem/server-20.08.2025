const yup = require('yup');
const CONSTANTS = require('../constants');

const userSchemaPost = yup.object({
    login: yup.string().trim().min(CONSTANTS.USER_LOGIN_MIN).max(CONSTANTS.USER_LOGIN_MAX).required(),
    email: yup.string().trim().email().required(),
    isMale: yup.boolean().required(),
    age: yup.number().min(CONSTANTS.USER_AGE_MIN).max(CONSTANTS.USER_AGE_MAX),
});

const userSchemaUpdate = yup.object({
    login: yup.string().trim().min(CONSTANTS.USER_LOGIN_MIN).max(CONSTANTS.USER_LOGIN_MAX),
    email: yup.string().trim().email(),
    isMale: yup.boolean(),
    age: yup.number().min(CONSTANTS.USER_AGE_MIN).max(CONSTANTS.USER_AGE_MAX),
});

const userSchemaQuery = yup.object({
    gender: yup.string().trim().oneOf(['male', 'female']),
    minAge: yup.number().min(CONSTANTS.USER_AGE_MIN).max(CONSTANTS.USER_AGE_MAX),
    maxAge: yup.number().min(CONSTANTS.USER_AGE_MIN).max(CONSTANTS.USER_AGE_MAX),
    login: yup.string().trim().min(CONSTANTS.QUERY_MIN).max(CONSTANTS.USER_LOGIN_MAX),
});

module.exports = { userSchemaPost, userSchemaUpdate, userSchemaQuery };