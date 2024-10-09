const db = require('../db');

const createCategoryTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS category (
      category_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255)
    )
  `;
  return db.execute(sql);
};

module.exports = {
    createCategoryTable
    
  };