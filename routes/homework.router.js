const express = require('express');
const { createHomework, findAllHomeworks, findHomeworkById, updateHomeworkById, deleteHomeworkById } = require('../controllers/homework.controller');
const { validateHomework, validateHomeworkQuery } = require('../middlewares/homework.mw');
const { homeworkSchemaPost, homeworkSchemaUpdate, homeworkSchemaQuery } = require('../validations/homework.validation');

const homeworkRouter = express.Router();

homeworkRouter.post('/', validateHomework(homeworkSchemaPost), createHomework);
homeworkRouter.get('/', validateHomeworkQuery(homeworkSchemaQuery), findAllHomeworks);
homeworkRouter.get('/:idHomework', findHomeworkById);
homeworkRouter.patch('/:idHomework', validateHomework(homeworkSchemaUpdate), updateHomeworkById);
homeworkRouter.put('/:idHomework', validateHomework(homeworkSchemaUpdate), updateHomeworkById);
homeworkRouter.delete('/:idHomework', deleteHomeworkById);

module.exports = homeworkRouter;