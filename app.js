const express = require("express");
const authRoutes = require("./routes/auth");
const mongoose = require("./database/database.config");
require("dotenv").config();
const cors = require("cors");
const applicationsRouter = require("./routes/applications");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error("❌ PORT is not defined in environment.");
}

mongoose.connection.on("open", () => {
  console.log(`MongoDB Connected`);
});

// ✅ Register routes BEFORE the fallback
app.get("/", (req, res) => {
  console.log("⚡ Base route hit");
  res.status(200).send("hello from server");
});

app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationsRouter);

// ✅ Register 404 fallback at the very end
app.use((req, res) => {
  console.log("⚠️  Unknown route hit:", req.originalUrl);
  res.status(404).send("Route not found");
});

// ✅ Listen
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ App is running on Railway-assigned port: ${PORT}`);
});
