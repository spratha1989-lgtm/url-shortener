const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./urls.db");

db.run(`
    CREATE TABLE IF NOT EXISTS urls (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        short_code TEXT UNIQUE NOT NULL,
        original_url TEXT NOT NULL
    )
`);

module.exports = db;