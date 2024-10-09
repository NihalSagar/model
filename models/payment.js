const db = require('../db');

const createPaymentTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS payment (
      transaction_id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT,
      payment_method VARCHAR(255),
      payment_status VARCHAR(50),
      FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
    )
  `;
  return db.execute(sql);
};

module.exports = {
    createPaymentTable,
    
  };