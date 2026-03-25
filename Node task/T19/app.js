const fs = require('fs');

fs.readdir('assets', (err, files) => {
    if (err) {
        console.log("Error reading directory:", err);
        return;
    }

    fs.writeFile('fileList.txt', files.join('\n'), (err) => {
        if (err) {
            console.log("Error writing file");
            return;
        }
        console.log("Saved");
    });
});
