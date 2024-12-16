# NodeJs(BackEnd)

## Day01

1. How to install **Node.Js**, Run First Node Js <br>
   > node -v <br>
   > npm init -y <br>
   > to run file -> node index.js <br>
2. How to create Rounter <br>
3. Conditional Rendering In Node Js <br>
   > /about <br>
   > /profile <br>
4. Intsall Express Js <br>
   > Express is a fast, unopinionated, minimalist web framework for Node.js, providing a robust set of features for web and mobile applications.
5. Express.Js connected with HTML <br>
6. Middleware
   > - Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. <br>
   > - Making quick changes to the request and response objects <br>
   > - Calling the next middleware immediately as per the stack <br>
   > - Effectively executing any code <br>
   > - Automatically terminating the request-response cycle <br>
7. Next() is a middleware function that calls for the control of another middleware once the code is completed. <br>
8. **Checked for HTTP method**
   > - req.method === 'GET': Ensures that only GET requests are handled.  <br>
   > - res.statusCode = 200: This is the status code for a successful response.  <br>
   > - res.statusCode = 404: For unmatched routes, the server returns a 404.  <br>
   > - res.statusCode = 405: For methods other than GET, a 405 status code is returned.  