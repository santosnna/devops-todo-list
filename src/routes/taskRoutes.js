// src/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /tasks -> aqui é só '/'
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ message: 'Erro ao buscar tarefas' });
  }
});

module.exports = router;
