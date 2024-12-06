const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Set up middleware for handling JSON requests
app.use(express.json());

// MongoDB URI (replace this with your actual MongoDB connection URI)
const mongoURI = 'mongodb://localhost:27017/mongodb-data'; // Example URI for local MongoDB

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Example route to test the server
app.get('/', (req, res) => {
  res.send('Congratulations!Connected to MongoDB!');
});

// Define the port the server will listen on
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
