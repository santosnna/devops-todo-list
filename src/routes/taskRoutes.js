// src/routes/taskRoutes.js
const express = require('express');
const router = express.Router();

// GET /tasks -> aqui é só '/'
router.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: 'Ok' });
  } catch (e) {
    res.status(500).json({ message: 'Error searching for tasks' });
  }
});

module.exports = router;
