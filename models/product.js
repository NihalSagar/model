const db = require('../db');

const createProductTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS product (
      product_id INT AUTO_INCREMENT PRIMARY KEY,
      product_name VARCHAR(255),
      description TEXT,
      image VARCHAR(255)
    )
  `;
  return db.execute(sql);
};

module.exports = {
    createProductTable
  };