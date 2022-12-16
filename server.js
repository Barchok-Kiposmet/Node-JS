// // this creates a server and it does acts on client's requests.

// let http = require("http");

// http.createServer(function (request, response) {
//     response.writeHead(200, { "content-type": "text/plain" });
//     response.write(index.html);
//     response.end();
//   })
//   .listen(8000, () => {
//     console.log("Server is running"); // this is to show on the console once we start the server.
//   });

// Running the server with a refactored code but with the same purpose as one above. Different function

// let http = require("http");

// function onRequest(request, response) {
//   response.writeHead(200, { "Content-type": "text/plain" });
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8000);

// asynchronus functions, execute before calling the functions.

let http = require("http");
let url = require("url");


// A function to wrap our server functionality so that we can export it
let start = function (route, handle) {
  function onRequest(request, response) {
    // Extracting the pathname from the url requested
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " has been received.");

    // Passing the pathname as a parameter to the route function
    route(handle, pathname);

    response.writeHead(200, { "Content-type": "text/plain" });
    response.write("iHello world");
    response.end();
  }

  http.createServer(onRequest).listen(8000);

  console.log("Server has started.");
};

exports.start = start;
