const db = require('../db');

const createReviewTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS review (
      review_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT,
      user_id INT,
      rating INT,
      review_text TEXT,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
    )
  `;
  return db.execute(sql);
};

module.exports = {
    createReviewTable
  };