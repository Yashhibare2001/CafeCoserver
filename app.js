const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/index');
require('dotenv').config();

const app = express();
const port = 5400;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.use('/', routes);

// Server
app.listen(port, () => {
  console.log(`🚀 Server is running on ${port}`);
});
