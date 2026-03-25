const fs = require('fs');

fs.stat('data.txt', (err, stats) => {
    console.log(`File: data.txt, Size: ${stats.size} bytes`);
});
