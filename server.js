const express = require("express");
const cors = require("cors");
const db = require("./database");
const { nanoid } = require("nanoid");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


// Port
const PORT = 5000;


// ==========================================
// POST API - Create Short URL
// ==========================================

app.post("/api/shorten", (req, res) => {

    const { url } = req.body;

    // Check if URL is provided
    if (!url) {
        return res.status(400).json({
            message: "URL is required"
        });
    }

    // Generate unique short code
    const shortCode = nanoid(6);

    // SQL query
    const sql = `
        INSERT INTO urls (short_code, original_url)
        VALUES (?, ?)
    `;

    // Insert data into database
    db.run(sql, [shortCode, url], function(err) {

        if (err) {
            console.error(err);

            return res.status(500).json({
                message: "Database error"
            });
        }

        // Send response
        res.status(200).json({
            originalUrl: url,
            shortUrl: `http://localhost:${PORT}/${shortCode}`
        });

    });

});


// ==========================================
// GET API - Redirect Short URL
// ==========================================

app.get("/:shortCode", (req, res) => {

    // Get short code from URL
    const { shortCode } = req.params;

    // SQL query
    const sql = `
        SELECT original_url
        FROM urls
        WHERE short_code = ?
    `;

    // Search database
    db.get(sql, [shortCode], (err, row) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                message: "Database error"
            });
        }

        // Short code not found
        if (!row) {
            return res.status(404).json({
                message: "Short URL not found"
            });
        }

        // Redirect to original URL
        res.redirect(row.original_url);

    });

});


// ==========================================
// Start Server
// ==========================================

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});