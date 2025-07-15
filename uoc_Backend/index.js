require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Route
app.use("/api/contact", contactRoutes);

// Dummy health check (optional)
app.get("/", (req, res) => {
  res.send("✅ Uditi Overseas Backend is live!");
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
