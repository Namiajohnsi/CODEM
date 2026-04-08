const fs = require('fs');

const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('destination.txt');

console.log("Piping started...");

readStream.pipe(writeStream);

readStream.on('end', () => {
    console.log("Pipe complete — destination.txt written successfully");
});