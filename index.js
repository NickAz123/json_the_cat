let input = require(`yargs`).argv;
const { fetchBreedDescription } = require(`./breedFetcher`);
let query = `https://api.thecatapi.com/v1/breeds/search?q=${input._}`;

fetchBreedDescription(query, (error, desc) => {
  if (error) {
    console.log('Error with getting details', error);
  } else {
    console.log(desc);
  }
});