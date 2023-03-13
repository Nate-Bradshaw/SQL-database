const initSqlJs = window.initSqlJs;


const SQL = await initSqlJs({ //CDN?
  locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js`
});


const db = new SQL.Database();