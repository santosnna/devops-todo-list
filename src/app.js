const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: '.env.example' });
dotenv.config();

express.json();

console.log(process.env.DB_HOST, process.env.DB_USER);
console.log('Environment variables loaded successfully');

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

module.exports = app;