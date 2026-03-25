const fs = require('fs');

fs.readFile('products.json', 'utf-8', (err, data) => {
    const products = JSON.parse(data);

    console.log("Product List");
    products.forEach(p => {
        console.log(`${p.name} - $${p.price}`);
    });
});
