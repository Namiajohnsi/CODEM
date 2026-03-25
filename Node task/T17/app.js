const fs = require('fs');

fs.readFile('text.txt', 'utf-8', (err, data) => {
    const words = data.split(' ');
    const unique = [...new Set(words)];

    fs.writeFile('uniqueWords.txt', unique.join('\n'), () => {
        console.log("Done");
    });
});
