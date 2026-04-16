const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

app.get('/', (req, res) => {
    res.json({ message: "Logging middleware working" });
});

app.listen(3000);