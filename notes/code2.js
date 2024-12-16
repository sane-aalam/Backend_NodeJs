// Load the http module to create an HTTP server
const http = require('http');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    // Send the response body "Hello, World!"
    res.end('Hello, World!\n');
});

// Start the server
// listen on the specified port and host
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
