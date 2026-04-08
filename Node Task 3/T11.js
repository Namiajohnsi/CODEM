const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('productAdded', (name) => {
    console.log("Product saved to database");
});

emitter.on('productAdded', () => {
    console.log("Email notification sent");
});

emitter.on('productAdded', () => {
    console.log("Inventory updated");
});

emitter.emit('productAdded', 'Laptop');
console.log("Product Name: Laptop");