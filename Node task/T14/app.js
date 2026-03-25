const fs = require('fs');
const { createGreeting } = require('./greeting');

fs.readFile('names.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    const names = data.split('\n');
    const greetings = names.map(name => createGreeting(name));

    fs.writeFile('greetings.txt', greetings.join('\n'), (err) => {
        if (err) {
            console.log("Error writing file");
            return;
        }
        console.log("Done");
    });
});
