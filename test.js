//import node file

const http = require('http');


// create a server

const server = http.createServer (function (request, response) {
    const method = request.method;
    const path = request.url;
    const headers = request.headers;

    const data  = {
        method, path, headers,
    };

    console.log(data);

    // ends any further action to be undertaken to the writtable
    response.end('<p>This is the end!<p/>');

    // event listener for the server activity

    server.listen(3000, function() {
        console.log('This seems to work now')
    });

});