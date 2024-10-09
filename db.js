const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'nihal@123',
  database: 'product_repair'
});

module.exports = pool.promise();
