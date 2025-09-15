const express = require('express');
const app = express();
const PORT = 5001;

const taskRoutes = require("./routes/user");
const connectDB = require("./config/db");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use("/api/task",taskRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running 🚀');
  });

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`App is running on port ${PORT}`);
})

connectDB();