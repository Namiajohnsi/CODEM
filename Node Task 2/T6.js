const EventEmitter = require("events");
const fs = require("fs");

const e = new EventEmitter();

e.on("dataReceived", data => {
  console.log("dataReceived", data);
  if (data.value) e.emit("dataValid", data);
});

e.on("dataValid", data => {
  data.value *= 2;
  console.log("dataProcessed", data);
  e.emit("dataProcessed", data);
});

e.on("dataProcessed", data => {
  fs.writeFileSync("result.txt", JSON.stringify(data));
  console.log("dataSaved");
});

e.emit("dataReceived", { id: 1, value: 42 });