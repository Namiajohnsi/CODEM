const http = require('http');
const fs = require('fs').promises;
const url = require('url');

http.createServer(async (req, res) => {
    const parsed = url.parse(req.url, true);
    const name = parsed.query.name || "Guest";

    let html = await fs.readFile('template.html', 'utf8');
    html = html.replace('{{username}}', name);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}).listen(3000);