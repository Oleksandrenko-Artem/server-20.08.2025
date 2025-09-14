const express = require('express');
const { createBook, findAllBooks, findBookById, updateBookById, deleteBookById, countBooks, booksStatistic, getTopAuthors } = require('../controllers/book.controller');
const { validateBook, validateBookQuery, buildBooksFilter } = require('../middlewares/book.mw');
const { bookSchemaPost, bookSchemaUpdate, bookSchemaQuery } = require('../validations/book.validation');
const { paginate } = require('../middlewares/pagination.mw');

const bookRouter = express.Router();

bookRouter.post('/', validateBook(bookSchemaPost), createBook);
bookRouter.get('/', paginate, validateBookQuery(bookSchemaQuery), buildBooksFilter, findAllBooks);
bookRouter.get('/top-authors', validateBookQuery(bookSchemaQuery), buildBooksFilter, getTopAuthors);
bookRouter.get('/count', validateBookQuery(bookSchemaQuery), buildBooksFilter, countBooks);
bookRouter.get('/statistic', validateBookQuery(bookSchemaQuery), buildBooksFilter, booksStatistic);
bookRouter.get('/:idBook', findBookById);
bookRouter.patch('/:idBook', validateBook(bookSchemaUpdate), updateBookById);
bookRouter.put('/:idBook', validateBook(bookSchemaUpdate), updateBookById);
bookRouter.delete('/:idBook', deleteBookById);

module.exports = bookRouter;