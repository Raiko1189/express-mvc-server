const express = require("express");
const app = express();

// Middleware to handle JSON
app.use(express.json());

// Routes
const appRoutes = require("./routes/appRoutes");
app.use("/api", appRoutes);

// Handle unknown routes (Bonus)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
