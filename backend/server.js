require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const projectRoutes = require("./routes/projects");
const messageRoutes = require("./routes/messages");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-project-pi-lime.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio API is running!");
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});


app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5001;

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
