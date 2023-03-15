const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const numA = 2;
const numB = 8;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let numC = numB / numA;
  res.end('ostrich-copter is cool ' + numC);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});