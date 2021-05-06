const request = require('request');
// let input = require(`yargs`).argv;


const fetchBreedDescription = (query, callback) => {
  let queryURL = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;
  
  request(queryURL, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    } else if (!data[0]) {
      callback(null, "Cannot Find");
      return;
    } else {
      callback(null, data[0].description);
      return;
    }
  });

};

module.exports = { fetchBreedDescription };