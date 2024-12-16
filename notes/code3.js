const http = require("http");

const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Main page!");
  } else if (req.url == "/Home") {
    res.end("This is Home Page!");
  } else if (req.url == "/About") {
    res.end("This is About Page!");
  } else {
    res.end("404 Not Found");
  }
});

// Start the server and listen on the specified port and host
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
