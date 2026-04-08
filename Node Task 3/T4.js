const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/readfile') {
        fs.readFile('bigfile.txt', 'utf8', (err, data) => {
            res.end(data);
        });
    } else if (req.url === '/streamfile') {
        const stream = fs.createReadStream('bigfile.txt', 'utf8');
        stream.pipe(res);
    }
}).listen(3000);