const express = require('express');
const { createUser, findAllUsers, findUserById, updateUserById, deleteUserById } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', findAllUsers);
userRouter.get('/:idUser', findUserById);
userRouter.patch('/:idUser', updateUserById);
userRouter.put('/:idUser', updateUserById);
userRouter.delete('/:idUser', deleteUserById);

module.exports = userRouter;