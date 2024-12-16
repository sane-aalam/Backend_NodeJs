console.log("hello world!");

const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  console.log("server is created!");
});

server.listen(port);
console.log("Node.js web server at port 5000 is running..");
