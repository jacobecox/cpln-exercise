const express = require('express');
const app = express();
require("dotenv").config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT || 5432,
  ssl: false
});

app.get('/', (req, res) => {
    res.send('API is healthy!');
  });
  

const dogsRouter = require('./routes/dogs')(pool);

app.use(express.json());
app.use('/api/dogs', dogsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
