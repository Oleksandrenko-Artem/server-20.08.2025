const http = require('http');         // core modules
const app = require('./app');         // local own modules
const connectDB = require('./config/db');

connectDB();

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
    console.log('server started at port = ' + port);
});