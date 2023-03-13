const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydatabase.db');

db.run(`CREATE TABLE mytable (
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER
)`);

db.close();