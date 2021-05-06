const request = require('request');
let input = require(`yargs`).argv;
let query = `https://api.thecatapi.com/v1/breeds/search?q=${input._}`;

request(query, (error, response, body) => {
  if (error) {
    console.log('Sorry, there seems to be an error: \n', error);
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(`Sorry, we cannot find any records of ${input._}.`);
  }
  
});