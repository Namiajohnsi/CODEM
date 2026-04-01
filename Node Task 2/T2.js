const http = require("http");

let active = 0;
let queue = [];
let id = 1;

// Logger Middleware
function logger(req, res, next) {
  req.id = id++;
  console.log(`Request ${req.id}: received`);
  next();
}

// Queue Controller
function queueHandler(req, res, next) {
  if (active < 2) {
    next();
  } else {
    console.log(`Request ${req.id}: queued (waiting)`);
    queue.push({ req, res });
  }
}

// Processor
function processRequest(req, res) {
  active++;
  console.log(`Request ${req.id}: processing`);

  setTimeout(() => {
    console.log(`Request ${req.id}: done in 1000ms`);
    res.end(`Request ${req.id} done`);

    active--;

    if (queue.length > 0) {
      const nextReq = queue.shift();
      processRequest(nextReq.req, nextReq.res);
    }
  }, 1000);
}

// Middleware Runner
function runMiddlewares(req, res, middlewares) {
  let index = 0;

  function next() {
    if (index < middlewares.length) {
      middlewares[index++](req, res, next);
    }
  }

  next();
}

// Server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    runMiddlewares(req, res, [
      logger,
      queueHandler,
      (req, res) => processRequest(req, res)
    ]);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});