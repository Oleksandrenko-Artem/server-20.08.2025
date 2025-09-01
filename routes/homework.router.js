const express = require('express');
const { createHomework, findAllHomeworks, findHomeworkById, updateHomeworkById, deleteHomeworkById } = require('../controllers/homework.controller');

const homeworkRouter = express.Router();

homeworkRouter.post('/', createHomework);
homeworkRouter.get('/', findAllHomeworks);
homeworkRouter.get('/:idHomework', findHomeworkById);
homeworkRouter.patch('/:idHomework', updateHomeworkById);
homeworkRouter.put('/:idHomework', updateHomeworkById);
homeworkRouter.delete('/:idHomework', deleteHomeworkById);

module.exports = homeworkRouter;