const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const taskRoutes = require("./routes/user");
app.use("/api/task", taskRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Start server *after DB connection*
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
});
