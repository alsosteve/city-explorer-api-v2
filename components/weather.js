'use strict';
const axios = require("axios");
require('dotenv').config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

class Forecast{
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
};

let handleGetWeather = async (req, res) => {
    const lon = req.query.lon;
    const lat = req.query.lat;

    const weatherUrl = `http://api.weatherbit.io/v2.0/forecast/daily/?key=${WEATHER_API_KEY}&lang=en&lat=${lat}&lon=${lon}&days=5`;

    try {
      const weatherResponse = await axios.get(weatherUrl);
      const forecastArr = arr => {return arr.map(data => {
        return new Forecast (data.datetime, `Low of ${data.low_temp}, high of ${data.high_temp} with ${data.weather.description}`)
      })};
      res.status(200).send(forecastArr(weatherResponse.data.data));
    } catch (error) {
      console.error(error.message);
    }
};


module.exports = handleGetWeather;
