const mongoose = require('mongoose');
const CONSTANTS = require('../constants');
const { Schema } = mongoose;

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        trim: true,
        minLength: CONSTANTS.USER_LOGIN_MIN,
        maxLength: CONSTANTS.USER_LOGIN_MAX,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    isMale: {
        type: Boolean,
        required: true,
    },
    age: {
        type: Number,
        default: CONSTANTS.USER_AGE_DEFAULT,
        min: CONSTANTS.USER_AGE_MIN,
        max: CONSTANTS.USER_AGE_MAX,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;