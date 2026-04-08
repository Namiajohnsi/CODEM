const http = require('http');

http.createServer((req, res) => {
    const start = Date.now();

    let body = req.url === '/api' ? "API Route" : "Home Page";

    const time = Date.now() - start;

    res.writeHead(200, {
        'X-Powered-By': 'Node.js',
        'X-Response-Time': `${time}ms`,
        'Content-Type': 'text/html'
    });

    console.log("Response Headers Sent:", res.getHeaders());

    res.end(body);
}).listen(3000);