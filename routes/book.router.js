const express = require('express');
const { createBook, findAllBooks, findBookById, updateBookById, deleteBookById, countBooks } = require('../controllers/book.controller');
const { validateBook, validateBookQuery, buildBooksFilter } = require('../middlewares/book.mw');
const { bookSchemaPost, bookSchemaUpdate, bookSchemaQuery } = require('../validations/book.validation');
const { paginate } = require('../middlewares/pagination.mw');

const bookRouter = express.Router();

bookRouter.post('/', validateBook(bookSchemaPost), createBook);
bookRouter.get('/', paginate, validateBookQuery(bookSchemaQuery), buildBooksFilter, findAllBooks);
bookRouter.get('/count', validateBookQuery(bookSchemaQuery), buildBooksFilter, countBooks);
bookRouter.get('/:idBook', findBookById);
bookRouter.patch('/:idBook', validateBook(bookSchemaUpdate), updateBookById);
bookRouter.put('/:idBook', validateBook(bookSchemaUpdate), updateBookById);
bookRouter.delete('/:idBook', deleteBookById);

module.exports = bookRouter;