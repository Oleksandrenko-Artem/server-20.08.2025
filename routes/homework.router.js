const express = require('express');
const { createHomework, findAllHomeworks, findHomeworkById, updateHomeworkById, deleteHomeworkById } = require('../controllers/homework.controller');
const { validateHomework, validateHomeworkQuery, buildHomeworksFilter } = require('../middlewares/homework.mw');
const { homeworkSchemaPost, homeworkSchemaUpdate, homeworkSchemaQuery } = require('../validations/homework.validation');
const { paginate } = require('../middlewares/pagination.mw');

const homeworkRouter = express.Router();

homeworkRouter.post('/', validateHomework(homeworkSchemaPost), createHomework);
homeworkRouter.get('/', paginate, validateHomeworkQuery(homeworkSchemaQuery), buildHomeworksFilter, findAllHomeworks);
homeworkRouter.get('/:idHomework', findHomeworkById);
homeworkRouter.patch('/:idHomework', validateHomework(homeworkSchemaUpdate), updateHomeworkById);
homeworkRouter.put('/:idHomework', validateHomework(homeworkSchemaUpdate), updateHomeworkById);
homeworkRouter.delete('/:idHomework', deleteHomeworkById);

module.exports = homeworkRouter;