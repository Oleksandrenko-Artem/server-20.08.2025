const mongoose = require('mongoose');
const { Schema } = mongoose;

const homeworkSchema = new Schema({
    subject: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 64,
    },
    task: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 255,
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