const express = require('express');
const app = express();

const students = [
    { id: 1, name: "Sai", course: "CSE", age: 21 },
    { id: 2, name: "Ram", course: "IT", age: 20 },
    { id: 3, name: "John", course: "ECE", age: 22 },
    { id: 4, name: "Priya", course: "EEE", age: 21 },
    { id: 5, name: "Anu", course: "CSE", age: 19 }
];

app.get('/students', (req, res) => {
    console.log("Fetching students");
    res.json(students);
});

app.get('/students/count', (req, res) => {
    res.json({ count: students.length });
});

app.get('/students/names', (req, res) => {
    res.json(students.map(s => s.name));
});

app.listen(3000);