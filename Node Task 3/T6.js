const http = require('http');

http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    res.end("Request received successfully");
}).listen(3000);