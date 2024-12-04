const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');
const connectDB = require('./db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});