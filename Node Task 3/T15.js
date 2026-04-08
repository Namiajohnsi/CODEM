const fs = require('fs');

const writable = fs.createWriteStream('output.txt');

writable.write("Name: Arun\n");
console.log("Writing line 1...");

writable.write("Age: 25\n");
console.log("Writing line 2...");

writable.write("City: Chennai\n");
console.log("Writing line 3...");

writable.write("Role: Developer\n");
console.log("Writing line 4...");

writable.end();

writable.on('finish', () => {
    console.log("All data written to output.txt");
});