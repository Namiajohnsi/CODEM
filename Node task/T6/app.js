const fs = require('fs');

fs.readdir('documents', (err, files) => {
    console.log("Total Files:", files.length);
});
