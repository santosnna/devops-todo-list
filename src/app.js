// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config({ path: '.env.example' }); // opcional: carrega defaults
dotenv.config(); // carrega .env real

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Rotas
app.use('/tasks', taskRoutes);

module.exports = app;
