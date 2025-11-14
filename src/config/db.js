const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.getConnection((err) => {
  if (err) console.error("DB connection failed:", err);
  else console.log("DB connected!");
});

module.exports = db.promise();
