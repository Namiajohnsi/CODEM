const express = require('express');
const app = express();

const products = [
    { id: 101, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 102, name: "Phone", price: 20000, category: "Electronics" },
    { id: 103, name: "Shirt", price: 1000, category: "Clothing" },
    { id: 104, name: "Shoes", price: 3000, category: "Footwear" },
    { id: 105, name: "Watch", price: 5000, category: "Accessories" }
];

app.get('/api/products', (req, res) => {
    console.log("Products requested");

    const sorted = products.sort((a, b) => a.name.localeCompare(b.name));

    res.json({
        totalProducts: sorted.length,
        data: sorted
    });
});

app.listen(3000);