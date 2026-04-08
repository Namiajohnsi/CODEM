const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/image') {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        const stream = fs.createReadStream('image.jpg');
        stream.pipe(res);
    }
}).listen(3000);