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

// NB use actual numbers between 3000-5000 as they are always free
server.listen(3000, () => {
  console.log("Server started");
});
