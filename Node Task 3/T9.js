const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let file = '';

    if (req.url === '/') file = 'home.html';
    else if (req.url === '/about') file = 'about.html';
    else if (req.url === '/contact') file = 'contact.html';

    fs.readFile(file, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(3000);