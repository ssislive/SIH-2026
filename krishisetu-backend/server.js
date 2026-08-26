import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { createServer } from "http";
import { Server } from "socket.io";
import connectMongo from "./config/mongo.js";
import { initializeSchema } from "./config/turso.js";

// Routes
import authRoutes from "./routes/auth.js";
import farmerRoutes from "./routes/farmer.js";
import fpoRoutes from "./routes/fpo.js";

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

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/farmer", farmerRoutes);
app.use("/api/fpo", fpoRoutes);

// Start Server & Connect Databases
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect databases - continue even if one fails
  try {
    await connectMongo();
  } catch (error) {
    console.error("MongoDB connection failed (continuing without it):", error.message);
  }

  try {
    await initializeSchema();
  } catch (error) {
    console.error("Turso schema init failed (continuing without it):", error.message);
  }

  httpServer.listen(PORT, () => {
    console.log(`\n🚀 KrishiSetu Backend running on http://localhost:${PORT}`);
    console.log(`   Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`   API Base: http://localhost:${PORT}/api`);
    console.log("\n📡 Available Endpoints:");
    console.log("   POST /api/auth/send-otp");
    console.log("   POST /api/auth/verify-otp");
    console.log("   GET  /api/auth/me");
    console.log("   POST /api/farmer/lots");
    console.log("   GET  /api/farmer/lots/my-lots");
    console.log("   GET  /api/farmer/summary");
    console.log("   GET  /api/fpo/available-lots");
    console.log("   POST /api/fpo/aggregate");
    console.log("   GET  /api/fpo/bulk-lots\n");
  });
};

startServer();
