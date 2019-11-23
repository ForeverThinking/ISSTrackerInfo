// jshint esversion: 6

// packages to include
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// initialise express app
const app = express();

// set CSS file location
app.use(express.static("public"));

// set home route
app.get('/', (req, res) => {
  request('http://api.open-notify.org/astros.json', (error, response, body) => {
    console.log(body);
  });
});

// set server listening
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
