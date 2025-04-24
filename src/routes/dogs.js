const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM dogs');
      res.json(result.rows);
    } catch (err) {
      console.error('Error fetching dogs:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};
