const express = require("express");
const AccessLog = require("../models/AccessLog");
const router = express.Router();

// Log file access
router.post("/log", async (req, res) => {
    const { ip, hostname, action, filename } = req.body;
    
    const log = new AccessLog({ ip, hostname, action, filename });
    await log.save();

    res.json({ success: true, message: "Access logged" });
});

// Get logs for forensic analysis
router.get("/logs", async (req, res) => {
    const logs = await AccessLog.find().sort({ timestamp: -1 });
    res.json(logs);
});

module.exports = router;
