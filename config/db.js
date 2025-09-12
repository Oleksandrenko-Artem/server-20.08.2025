const mongoose = require('mongoose');
const CONSTANTS = require('../constants');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${CONSTANTS.DATABASE_CONNECT}`);
        console.log('mongodb connect success');
    } catch (error) {
        console.log('mongodb connect error, ' + error);
        process.exit(1);
    }
};

module.exports = connectDB;