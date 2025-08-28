const express = require('express');
const { createUser } = require('./controllers/user.controller');
const app = express();

app.use(express.json()); // json -> object

app.post('/users', createUser);

module.exports = app;