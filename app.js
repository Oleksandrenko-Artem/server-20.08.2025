const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('hi from express!');
});

app.get('/about', (req, res) => {
    res.end('about page');
});

app.get('/contacts', (req, res) => {
    res.end('contacts page');
});

/*-----------------*/

app.use((req, res) => {
    res.end('error 404');
});

module.exports = app;