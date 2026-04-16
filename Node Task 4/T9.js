const express = require('express');
const app = express();

const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Phone", category: "electronics" },
    { name: "Shirt", category: "clothing" }
];

app.get('/search', (req, res) => {
    const { name, category } = req.query;

    let result = products;

    if (name) result = result.filter(p => p.name.includes(name));
    if (category) result = result.filter(p => p.category === category);

    console.log("Search:", req.query);

    res.json({
        resultCount: result.length,
        data: result
    });
});

app.listen(3000);