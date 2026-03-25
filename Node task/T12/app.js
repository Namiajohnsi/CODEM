const fs = require('fs');

fs.readFile('sentence.txt', 'utf-8', (err, data) => {
    const reversed = data.split('').reverse().join('');

    fs.writeFile('reverse.txt', reversed, () => {
        console.log("Done");
    });
});
