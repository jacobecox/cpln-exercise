const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    console.log('Fetching cats...');
    try {
      console.log('Running SQL query...');
      const result = await pool.query('SELECT * FROM cats');
      console.log('Query results:', result.rows);

      res.json(result.rows);
    } catch (err) {
      console.error('Error fetching cats:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
}; 