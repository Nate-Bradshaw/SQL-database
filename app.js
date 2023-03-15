const http = require('http');
const url = require('url');
const sqlite3 = require('sqlite3');

const hostname = '127.0.0.1';
const port = 8080;


const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <form method="POST">
        <label for="input-field">Input Field:</label>
        <input type="text" id="input-field" name="input-field">
        <button type="submit">Submit</button>
      </form>
    `);
    res.end();
  } 
  else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      console.log(body);
    });

    const inputField = url.parse(`?${body}`, true).query['input-field'];
    res.write(`<p>You entered: ${inputField}</p>`);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <form method="POST">
        <label for="input-field">Input Field:</label>
        <input type="text" id="input-field" name="input-field">
        <button type="submit">Submit</button>
      </form>
    `);
    res.end();
  }
});

function testDB(){
  const db = new sqlite3.Database('mydatabase.db');

  db.run(`CREATE TABLE mytable (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
  )`);

  return db;

  db.close();
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});