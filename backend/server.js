require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/ai", aiRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* ===== SOCKET AUTHENTICATION ===== */
io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) return next(new Error("Authentication error"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error("Invalid token"));
  }
});

/* ===== SOCKET EVENTS ===== */
io.on("connection", (socket) => {
  console.log("User connected:", socket.user.id);

  // Join personal room
  socket.join(socket.user.id);

  // Join specific chat room
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
  });

  // Send message
  socket.on("sendMessage", ({ roomId, message }) => {

    const msgData = {
      sender: socket.user.id,
      message,
      timestamp: new Date()
    };

    io.to(roomId).emit("receiveMessage", msgData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5000, () =>
  console.log("Server running with Socket.io on port 5000")
);
