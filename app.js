// jshint esversion: 6

// packages to include
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');

// initialise express app
const app = express();

// use ejs view system
app.set('view engine', 'ejs');

// set CSS file location
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

// set home route
app.get('/', (req, res) => {

  // GET request for current ISS location
  request("http://api.open-notify.org/iss-now.json", (error, response, body) => {
    // parse data
    let locationData = JSON.parse(body);

    // get latitude and longitude data
    let issLatitude = locationData.iss_position.latitude;
    let issLongitude = locationData.iss_position.longitude;
  });

  // GET request for People in Space API
  request('http://api.open-notify.org/astros.json', (error, response, body) => {
    // parse data from result
    let data = JSON.parse(body);

    // get number of people and list of names from data
    let numberOfPeople = data.number;
    let listOfPeople = data.people; // use item.name when using forEach
  });

  res.render('home');

});

// set server listening
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
