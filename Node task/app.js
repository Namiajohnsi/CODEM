const fs = require('fs');

fs.readFile('numbers.txt', 'utf-8', (err, data) => {
    const nums = data.split('\n').map(Number);
    const even = nums.filter(n => n % 2 === 0);

    fs.writeFile('evenNumbers.txt', even.join('\n'), () => {
        console.log("Even numbers saved");
    });
});