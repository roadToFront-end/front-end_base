import { createServer } from 'http';

createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(5000);

console.log('Server running at http://localhost:5000/');