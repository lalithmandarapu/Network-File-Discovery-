const mongoose = require("mongoose");

const computerSchema = new mongoose.Schema({
    ip: { type: String, required: true },
    hostname: { type: String, required: true },
    files: { type: [String], required: true },
    lastSeen: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Computer", computerSchema);
