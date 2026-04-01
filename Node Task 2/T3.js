const fs = require("fs");

function readFile(file) {
  console.log("Reading file...");
  return fs.readFileSync(file, "utf8");
}

function parseContent(data) {
  let lines = data.split("\n");
  let filtered = lines.filter(l => l.trim());
  console.log(`Parsing ${lines.length} lines`);
  return filtered;
}

function saveProcessed(data) {
  fs.writeFileSync("output.txt", data.join("\n"));
  console.log("Saved to output.txt");
}

fs.watch("data.txt", () => {
  console.log("File changed: data.txt");
  let data = readFile("data.txt");
  let parsed = parseContent(data);
  saveProcessed(parsed);
});