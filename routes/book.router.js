const express = require('express');
const { createBook, findAllBooks, findBookById, updateBookById, deleteBookById } = require('../controllers/book.controller');

const bookRouter = express.Router();

bookRouter.post('/', createBook);
bookRouter.get('/', findAllBooks);
bookRouter.get('/:idBook', findBookById);
bookRouter.patch('/:idBook', updateBookById);
bookRouter.put('/:idBook', updateBookById);
bookRouter.delete('/:idBook', deleteBookById);

module.exports = bookRouter;