const express = require("express");
const router = express.Router();
const Computer = require("../models/Computer");  // Make sure Computer.js exists in /models

// GET all computers
router.get("/computers", async (req, res) => {
    try {
        const computers = await Computer.find();
        res.json(computers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
