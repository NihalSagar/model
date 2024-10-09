const db = require('../db');

const createServiceTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS service (
      service_id INT AUTO_INCREMENT PRIMARY KEY,
      service_name VARCHAR(255),
      regular_service_price DECIMAL(10, 2) NOT NULL,
      premium_service_price DECIMAL(10, 2) NOT NULL,
      category_id INT,
      subcategory_id INT,
      FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE CASCADE,
      FOREIGN KEY (subcategory_id) REFERENCES subcategory(subcategory_id) ON DELETE CASCADE
    )
  `;
  return db.execute(sql);
};