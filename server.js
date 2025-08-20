const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hi from server!!!');
});

const port = 3000;

server.listen(port, () => {
    console.log('server started at port = ' + port);
});