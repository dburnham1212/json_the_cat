const request = require('request');

const fetchBreed = () => {
  let args = process.argv.slice(2);
  if (args.length !== 1) {
    throw new Error("We need 1 argument, no more, no less");
  }
  const breed = args[0];
  const breedAbbr = breed.slice(0, 4);//abbreviated form of breed to be passed into api
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedAbbr}`, function(error, _response, body) {
    if (error) {// check if we have errors in our url. if so then print the error message
      throw new Error(error.message);
    }
    let data = JSON.parse(body);

    if (data.length === 0) {// throw an error if the breed we entered does not exist
      throw new Error("Breed does not exist");
    }
    
    console.log(data[0].description);
    console.log(typeof data);
  });
};

fetchBreed();