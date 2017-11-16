const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client')));

app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  console.log(`${req.method} to ${req.url} with headers ${req.headers['content-type']}`);
  next();
})

app.get('*', (req, res) => {
  console.log('req.body', req.body);
  console.log('req.query', req.query);
  res.end();
});

app.post('*', (req, res) => {
  console.log('req.body', req.body);
  console.log('req.query', req.query);
  res.end();
});

app.listen(3000);