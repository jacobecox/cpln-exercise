const express = require('express');
const app = express();
const dogsRouter = require('./routes/dogs');
require("dotenv").config();

app.use(express.json());
app.use('/api/dogs', dogsRouter);

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT || 5432,
  ssl: false
});

app.get("/test", async (req, res) => {
    console.log('PG_HOST=', process.env.PG_HOST,
        'PG_USER=', process.env.PG_USER,
        'PG_PASSWORD=', process.env.PG_PASSWORD,
        'PG_DATABASE=', process.env.PG_DATABASE,
        'PG_PORT=', process.env.PG_PORT
    )
    try {
      const result = await pool.query("SELECT NOW()");
      res.send(result.rows);
    } catch (err) {
      console.error("DB connection failed:", err);
      res.status(500).send("DB connection failed.");
    }
  });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
