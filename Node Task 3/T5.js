const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to my Node Server");
    } else if (req.url === '/about') {
        res.end("This server is built using Node.js");
    } else if (req.url === '/contact') {
        res.end("Contact us at example@email.com");
    }
}).listen(3000);