const yup = require('yup');
const CONSTANTS = require('../constants');

const homeworkSchemaPost = yup.object({
    subject: yup.string().trim().min(CONSTANTS.HOMEWORK_SUBJECT_MIN).max(CONSTANTS.HOMEWORK_SUBJECT_MAX).required(),
    task: yup.string().trim().min(CONSTANTS.HOMEWORK_TASK_MIN).max(CONSTANTS.HOMEWORK_TASK_MAX).required(),
    deadline: yup.date(),
});

const homeworkSchemaUpdate = yup.object({
    subject: yup.string().trim().min(CONSTANTS.HOMEWORK_SUBJECT_MIN).max(CONSTANTS.HOMEWORK_SUBJECT_MAX),
    task: yup.string().trim().min(CONSTANTS.HOMEWORK_TASK_MIN).max(CONSTANTS.HOMEWORK_TASK_MAX),
    deadline: yup.date().optional(),
});

const homeworkSchemaQuery = yup.object({
    subject: yup.string().trim().min(CONSTANTS.QUERY_MIN).max(CONSTANTS.HOMEWORK_SUBJECT_MAX),
    task: yup.string().trim().min(CONSTANTS.QUERY_MIN).max(CONSTANTS.HOMEWORK_TASK_MAX),
    deadline: yup.date(),
});

module.exports = { homeworkSchemaPost, homeworkSchemaUpdate, homeworkSchemaQuery };