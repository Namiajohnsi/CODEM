const fs = require('fs');

fs.readFile('article.txt', 'utf-8', (err, data) => {
    const count = (data.match(/Node.js/g) || []).length;
    console.log(`Word "Node.js" found ${count} times`);
});