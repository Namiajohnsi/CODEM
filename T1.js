const http = require("http");

let count = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/secure") {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);

    if (req.headers["x-auth"] !== "secret123") {
      res.writeHead(401);
      return res.end("Unauthorized");
    }
    console.log("Auth passed");

    count++;
    if (count > 5) {
      res.writeHead(429);
      return res.end("Too many requests");
    }
    console.log(`Rate limit: ${count}/5`);

    res.end("Success");
    console.log("Response sent");
  }
});
server.listen(3000);