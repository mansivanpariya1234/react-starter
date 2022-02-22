//--------include module------
var mysql = require("mysql");

//------create connection------
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app",
});

//------check connection-------
conn.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

module.exports = conn;
