const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "collage_addmition",
  user: "root",
  password: "gaurav",
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to the database!");
    connection.release();
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
})();

module.exports = pool;
