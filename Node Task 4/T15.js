const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [];

function isValidProduct(p) {
  return p.name && typeof p.price === 'number';
}

app.get('/products', (req, res) => {
  console.log("GET /products");

  res.status(200).json(products);
});

app.post('/products', (req, res) => {
  console.log("POST /products");

  const product = req.body;

  if (!isValidProduct(product)) {
    return res.status(400).json({
      error: "Invalid product data"
    });
  }

  product.id = products.length + 1;
  products.push(product);

  res.status(201).json({
    message: "Product created successfully",
    product
  });
});

app.put('/products/:id', (req, res) => {
  console.log(`PUT /products/${req.params.id}`);

  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found"
    });
  }

  if (!isValidProduct(req.body)) {
    return res.status(400).json({
      error: "Invalid product data"
    });
  }

  Object.assign(product, req.body);

  res.status(200).json({
    message: "Product updated successfully",
    product
  });
});

app.delete('/products/:id', (req, res) => {
  console.log(`DELETE /products/${req.params.id}`);

  const index = products.findIndex(p => p.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      error: "Product not found"
    });
  }

  products.splice(index, 1);

  res.status(200).json({
    message: "Product deleted successfully"
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});