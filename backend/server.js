// server.js (or index.js)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/codedecode', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

// Define a user schema
const userSchema = new Schema({
  name: String,
  number: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a new user endpoint
app.post('/api/register', async (req, res) => {
  const { name, number, email, password } = req.body;

  // Check if any field is missing
  if (!name || !number || !email || !password) {
    return res.status(400).json({ message: 'All fields are mandatory' });
  }

  // Perform email and password validation
  // You can use regex or any validation method here

  // Create a new user in the database
  try {
    const newUser = new User({ name, number, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
