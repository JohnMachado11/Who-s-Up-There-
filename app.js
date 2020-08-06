const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/static/js/main.js') {
        fs.readFile('./static/js/main.js', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'js'}); 
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/static/css/styles.css') {
        fs.readFile('./static/css/styles.css', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/css'}); 
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/static/images/astronaut.png') {
        fs.readFile('./static/images/astronaut.png', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/*'}); 
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/static/images/earth.png') {
        fs.readFile('./static/images/earth.png', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/*'}); 
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/static/images/rocket.png') {
        fs.readFile('./static/images/rocket.png', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/*'}); 
            response.write(contents); 
            response.end();
        });
    }
    else {
        response.end('File not found');
    }
});
server.listen(3000);
console.log("Listening on port 3000");
