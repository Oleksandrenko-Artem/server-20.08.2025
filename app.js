const express = require('express');
const userRouter = require('./routes/user.router');
const homeworkRouter = require('./routes/homework.router');
const bookRouter = require('./routes/book.router');
const errorHandler = require('./errors/errorHandler');

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/homeworks', homeworkRouter);
app.use('/books', bookRouter);

app.use(errorHandler);

module.exports = app;