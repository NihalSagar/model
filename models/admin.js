const db = require('../db');

const createAdminTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS admin (
      admin_id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
    )
  `;
  return db.execute(sql);
};

module.exports = {
    createAdminTable
  };