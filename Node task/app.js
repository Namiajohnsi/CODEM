const fs = require('fs');

fs.readFile('story.txt', 'utf-8', (err, data) => {
    const lines = data.split('\n');
    console.log("Total Lines:", lines.length);
});