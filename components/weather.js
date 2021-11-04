'use strict';
const axios = require("axios");
require('dotenv').config();

// json file
const weather = require('../data/weather.json');

class Forecast{
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

let handleGetWeather = (req, res) => {
    const searchQuery = req.query.searchQuery;
    const lon = req.query.lon;
    const lat = req.query.lat;
      
    
    const cityResult = weather.find(element => 
      String(element.lat) === lat && String(element.lon) === lon && element.city_name === searchQuery);
     
    
     const forecastArr = arr => {
      return arr.map(obj => {
        return {
          datetime: obj.datetime,
          description: `Low of ${obj.low_temp}, high of ${obj.high_temp} with ${obj.weather.description}`,
        };
      }
        );
     };
    
    // console.log(forecastArr(cityResult.data));
    
     if(cityResult === undefined) {
      res.status(400).send('Invalid Entry');
    } else {
        res.status(200).send(forecastArr(cityResult.data));
    }
}


module.exports = handleGetWeather;
