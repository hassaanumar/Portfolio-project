require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const projectRoutes = require("./routes/projects");
const messageRoutes = require("./routes/messages");

const app = express();

const allowedOrigin = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: allowedOrigin || "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio API is running!");
});

app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
