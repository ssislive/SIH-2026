import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { createServer } from "http";
import { Server } from "socket.io";
import connectMongo from "./config/mongo.js";
import { connectRedis } from "./config/redis.js";
import { initializeSchema } from "./config/turso.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Socket.io
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST"]
  }
});

// Basic Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to KrishiSetu Backend API" });
});

// Start Server & Connect Databases
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectMongo();
    await connectRedis();
    await initializeSchema();

    httpServer.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
