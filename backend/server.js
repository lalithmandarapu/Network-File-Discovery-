const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./db");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

connectDB();

// ✅ Corrected Routes - Make sure files exist inside `/routes`
const computerRoutes = require("./routes/computerRoutes");
const logRoutes = require("./routes/logRoutes");

// Use Routes
app.use("/api", computerRoutes);
app.use("/api", logRoutes);

// Socket.io Setup
io.on("connection", (socket) => {
    console.log("🔵 New Client Connected");
    socket.on("disconnect", () => {
        console.log("🔴 Client Disconnected");
    });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
