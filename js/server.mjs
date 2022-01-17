import { createServer } from 'http';
import { parse } from 'url';

function start(route) {
    function onRequest(request, response) {
        var pathname = parse(request.url, true).pathname;
        console.log('Request for ' + pathname + ' received.');
        route(pathname);

        var params = parse(request.url, true).query;
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('<h1>Hello World</h1>');
        response.write("\n");
        response.write("website name: " + params.name);
        response.write("\n");
        response.write("website url: " + params.url);
        response.end();
    }

    createServer(onRequest).listen(5000);
    console.log('Server has started.');
}

const _start = start;
export { _start as start };