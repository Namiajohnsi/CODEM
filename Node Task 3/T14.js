const { Readable } = require('stream');

const readable = new Readable({
    read() {}
});

readable.push("Line 1: Hello\n");
readable.push("Line 2: World\n");
readable.push("Line 3: Done\n");
readable.push(null);

readable.on('data', (chunk) => {
    console.log("Chunk received:", chunk.toString());
});

readable.on('end', () => {
    console.log("Stream ended");
});