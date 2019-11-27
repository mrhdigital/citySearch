//alert("linked");

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// const prom = fetch(endpoint);
// console.log(prom);
// fetch(endpoint).then(blob => console.log(blob));
fetch(endpoint)
  .then(blob => blob.json())
//   .then(data => console.log(data));
  // put this data into the array cities
  .then(data => cities.push(...data));

  function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      // here we need to figure out if the city or state matches what was searched
       const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex)
    //return place.city.match(/bos/i);
    });
  }