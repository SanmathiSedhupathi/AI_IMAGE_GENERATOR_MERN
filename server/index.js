import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import generateImageRoute from "./routes/GenerateImage.js";
import posts from "./routes/Posts.js";

dotenv.config();

const app = express();

// ✅ Allow all origins temporarily (for dev only)
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// ✅ Mount routes
app.use("/api/generate-image", generateImageRoute);
app.use("/api/post", posts);

// ✅ Add OPTIONS preflight handler for all routes
app.options("*", cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is working." });
});

// ✅ Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({ success: false, status, message });
});

// ✅ Connect DB and start server
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection failed", err));
};

const startServer = () => {
  connectDB();
  app.listen(8081, () => console.log("Server started on port 8081"));
};

startServer();
//   } catch (error) {