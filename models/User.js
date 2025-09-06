const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 15,
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
        default: 15,
        min: 12,
        max: 100,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;