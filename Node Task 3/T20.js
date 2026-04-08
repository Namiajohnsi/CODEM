const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    const query = parsed.query;

    if (Object.keys(query).length === 0) {
        res.writeHead(400);
        return res.end("No query params found");
    }

    console.log("Query received:");
    for (let key in query) {
        console.log(`${key} = ${query[key]}`);
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(query));
}).listen(3000);