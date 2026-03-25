const fs = require('fs');

function saveNote(note) {
    fs.appendFileSync('notes.txt', note + '\n');
}

module.exports = { saveNote };