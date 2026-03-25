const fs = require('fs');

fs.readFile('message.txt', 'utf-8', (err, data) => {
    const upper = data.toUpperCase();

    fs.writeFile('uppercase.txt', upper, () => {
        console.log("File converted successfully");
    });
});