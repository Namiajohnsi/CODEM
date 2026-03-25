const fs = require('fs');

function logTime(message) {
    const time = new Date().toISOString();
    fs.appendFileSync('timeLog.txt', `${time} - ${message}\n`);
}

module.exports = { logTime };