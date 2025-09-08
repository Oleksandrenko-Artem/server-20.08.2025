const express = require('express');
const { createUser, findAllUsers, findUserById, updateUserById, deleteUserById } = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/user.mw');
const { userSchemaPost, userSchemaUpdate } = require('../validations/user.validation');

const userRouter = express.Router();

userRouter.post('/', validateUser(userSchemaPost), createUser);
userRouter.get('/', findAllUsers);
userRouter.get('/:idUser', findUserById);
userRouter.patch('/:idUser', validateUser(userSchemaUpdate), updateUserById);
userRouter.put('/:idUser', validateUser(userSchemaUpdate), updateUserById);
userRouter.delete('/:idUser', deleteUserById);

module.exports = userRouter;