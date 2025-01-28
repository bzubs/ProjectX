const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

// Connect to the database
const connectDB = require('./config/db');
connectDB();

console.log('MongoDB URI:', process.env.MONGO_URI);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes'); // Import user routes

// Mount the user routes at /api/users
app.use('/api/users', userRoutes); // This is the key line

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
