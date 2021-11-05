'use strict';
const axios = require("axios");
require('dotenv').config();

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

class Films{
  constructor(title, overview, average_votes, total_votes, popularity, released) {
    this.title = title;
    this.overview = overview;
    this.average_votes = average_votes;
    this.total_votes = total_votes;
    this.popularity = popularity;
    this.released = released;
  }
}

let handleGetMovies = async (req, res) => {
    const searchQuery = req.query.searchQuery;

    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

    try {
      const movieResponse = await axios.get(movieUrl);

      const filmsArr = arr => { return arr.map(data => {
        return new Films (data.title, data.overview, data.votes_average, data.votes_total, data.popularity, data.release_date)
      })};
      
    res.status(200).send(filmsArr(movieResponse.data.results))

    } catch (error) {
      console.error(error.message);
    }
}


module.exports = handleGetMovies;
