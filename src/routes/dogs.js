const express = require('express');
const router = express.Router();
const pool = require('../index.js');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dogs');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching dogs:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
