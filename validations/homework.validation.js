const yup = require('yup');

const homeworkSchemaPost = yup.object({
    subject: yup.string().trim().min(3).max(64).required(),
    task: yup.string().trim().min(5).max(255).required(),
    deadline: yup.date(),
});

const homeworkSchemaUpdate = yup.object({
    subject: yup.string().trim().min(3).max(64),
    task: yup.string().trim().min(5).max(255),
    deadline: yup.date().optional(),
});

const homeworkSchemaQuery = yup.object({
    subject: yup.string().trim().min(1).max(64),
    task: yup.string().trim().min(1).max(255),
    deadline: yup.date(),
});

module.exports = { homeworkSchemaPost, homeworkSchemaUpdate, homeworkSchemaQuery };