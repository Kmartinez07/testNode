const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api/routes');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:8082', 'http://localhost:5000']
  })
);
app.use('/api', api);
api.use(function(req, res) {
  res.status(404).json({
    message: 'URL does not exist'
  });
});
module.exports = app;
