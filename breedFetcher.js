const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breedAbbr = breedName.slice(0, 4);//abbreviated form of breed to be passed into api
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedAbbr}`, function(error, _response, body) {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const description = data[0].description;
        callback(null, description);
      } else {
        callback("Breed not found", null);
      }
    }
  });
};


module.exports = { fetchBreedDescription };