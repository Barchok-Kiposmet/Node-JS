let http = require('http');

// this creates a server and it does acts on client's requests.
http.createServer(function(request, response){
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('Hello world!');
    response.end();
}).listen(8000, () => {
    console.log('Server is running');
});

