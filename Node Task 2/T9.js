const fs = require("fs");

Promise.all([
  new Promise(r => setTimeout(() => r([{id:1},{id:2}]), 600)),
  new Promise(r => setTimeout(() => r([{id:2},{id:3}]), 400))
]).then(([remote, local]) => {
  let map = {};
  [...local, ...remote].forEach(d => map[d.id] = d);
  let result = Object.values(map);

  console.log("Synced:", result.length);
  fs.writeFileSync("sync.json", JSON.stringify(result));
});