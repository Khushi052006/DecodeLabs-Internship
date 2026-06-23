const express = require("express");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Student Management API"
  });
});

// API Routes
app.use("/api", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});