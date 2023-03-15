const sqlite3 = require('sqlite3').verbose();

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