const db = require('../db');

const createUserTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS user (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE,
      password VARCHAR(255),
      address TEXT,
      phone_number VARCHAR(20),
      user_appointment VARCHAR(255)
    )
  `;
  return db.execute(sql);
};

module.exports = {
    createUserTable
  };