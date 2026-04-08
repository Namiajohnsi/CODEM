const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/stream') {
        const stream = fs.createReadStream('bigfile.txt', 'utf8');
        stream.pipe(res);
    }
}).listen(3000);