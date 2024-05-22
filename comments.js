// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route to handle GET requests
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});