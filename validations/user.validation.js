const yup = require('yup');

const userSchemaPost = yup.object({
    login: yup.string().trim().min(5).max(15).required(),
    email: yup.string().trim().email().required(),
    isMale: yup.boolean().required(),
    age: yup.number().min(12).max(100),
});

const userSchemaUpdate = yup.object({
    login: yup.string().trim().min(5).max(15),
    email: yup.string().trim().email(),
    isMale: yup.boolean(),
    age: yup.number().min(12).max(100),
});

module.exports = { userSchemaPost, userSchemaUpdate };