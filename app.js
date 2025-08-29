const express = require('express');
const { createUser, findAllUsers, findUserById, updateUserById, deleteUserById } = require('./controllers/user.controller');
const app = express();

app.use(express.json()); // json -> object

app.post('/users', createUser);
app.get('/users', findAllUsers);
app.get('/users/:idUser', findUserById);
app.patch('/users/:idUser', updateUserById); // часткове оновлення
app.put('/users/:idUser', updateUserById);   // повне оновлення
app.delete('/users/:idUser', deleteUserById);

app.use((err, req, res, next) => {
    // console.log(err.message);
    res.status(500).send({ errors: [err.message] });
});

module.exports = app;