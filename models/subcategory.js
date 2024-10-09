const db = require('../db');

const createSubcategoryTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS subcategory (
      subcategory_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      category_id INT,
      FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE CASCADE
    )
  `;
  return db.execute(sql);
};

module.exports = {
    createSubcategoryTable
  };