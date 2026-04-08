const http = require('http');

http.createServer((req, res) => {
    console.log("Headers Received:");
    console.log(req.headers);

    res.end("Headers logged");
}).listen(3000);