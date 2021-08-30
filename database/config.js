const mysql = require('mysql')
require('dotenv').config()

module.exports = {
  doConnect,
  testConnection
};

async function doConnect() {
  return mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_PASSWORD
  })
}

async function testConnection() {
  let connection = await doConnect();
  return new Promise((resolve, reject) => {
    connection.getConnection((err, conn) => {
      if (err) return reject(err);

      resolve(conn);
    })
  })
}