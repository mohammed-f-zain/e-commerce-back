const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.sqlite');

function createUsersTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      favproducts TEXT,
      orders TEXT
    );
  `;

  db.run(query);
}

function createProductsTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT,
      price REAL NOT NULL
    );
  `;

  db.run(query);
}

function getAllProducts(callback) {
  const query = `SELECT * FROM products;`;

  db.all(query, (err, products) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, products);
    }
  });
}

module.exports = { createUsersTable, createProductsTable, getAllProducts };
