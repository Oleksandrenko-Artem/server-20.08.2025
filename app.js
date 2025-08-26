const express = require('express');
const app = express();

app.get('/products/:id', (req, res) => {
    const requestStr = `method: ${req.method},
    <br> url: ${req.url},
    <br> path: ${req.path}, 
    <br> query: ${JSON.stringify(req.query)},
    <br> params: ${JSON.stringify(req.params)},
    <br> key: ${req.params.id},
    <br> hostname: ${req.hostname},
    <br> ip: ${req.ip}`
    console.log(req);
    res.end(`<h1>${requestStr}</h1>`);
});

app.get('/users/:id', (req, res) => {
    const requestStr = `${req.path}
    <br>${req.params.id}`
    res.end(`<h1>${requestStr}</h1>`);
});

module.exports = app;