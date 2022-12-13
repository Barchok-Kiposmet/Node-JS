// Import
const http = require("http");

// Create Server
const server = http.createServer( (request, response) => {
  const method = request.method;
  const path = request.url;
  const headers = request.headers;

  const data = {
    method,
    path,
    headers,
  };

//   console.log(data);

  response.end("This is working");
});

server.listen(3000, () => {
  console.log("Server started");
});
