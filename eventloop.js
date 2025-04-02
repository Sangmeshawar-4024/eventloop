const http = require('http');

const server = http.createServer((req, res) => {
    setTimeout(()=>{
        console.log('Request received');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, Full Stack Developer!');
    },3)

});

server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001/');
});