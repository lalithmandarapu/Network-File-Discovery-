const mongoose = require("mongoose");

const AccessLogSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    ip: String,
    hostname: String,
    action: String, // "viewed" or "downloaded"
    filename: String,
});

module.exports = mongoose.model("AccessLog", AccessLogSchema);
