const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mongo_4");
        console.log('mongodb connect success');
    } catch (error) {
        console.log('mongodb connect error, ' + error);
        process.exit(1);
    }
};

module.exports = connectDB;