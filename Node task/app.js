const fs = require('fs');

fs.readFile('paragraph.txt', 'utf-8', (err, data) => {
    const words = data.split(' ');
    console.log("Total Words:", words.length);
});