const mongoose = require('mongoose');
const CONSTANTS = require('../constants');
const { Schema } = mongoose;

const homeworkSchema = new Schema({
    subject: {
        type: String,
        required: true,
        trim: true,
        minLength: CONSTANTS.HOMEWORK_SUBJECT_MIN,
        maxLength: CONSTANTS.HOMEWORK_SUBJECT_MAX,
    },
    task: {
        type: String,
        required: true,
        trim: true,
        minLength: CONSTANTS.HOMEWORK_TASK_MIN,
        maxLength: CONSTANTS.HOMEWORK_TASK_MAX,
    },
    deadline: {
        type: Date,
        default: () => {
            const now = new Date();
            now.setDate(now.getDate() + 3);
            return now;
        }
    }
});

const Homework = mongoose.model('Homework', homeworkSchema);
module.exports = Homework;