console.log("Sync");

process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("promise"));

setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));

require("fs").readFile(__filename, () => console.log("fs read"));