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

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  

  function displayMatches() {
//console.log(this.value);
const matchArray = findMatches(this.value, cities);
//console.log(matchArray);
const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
    <li>
     <span class = "name"> ${cityName}, ${stateName}</span>
     <span class="population">${numberWithCommas(place.population)}</span>
     <span class="population">${numberWithCommas(place.growth_from_2000_to_2013)}</span>


     </li>
    `;
}).join('');
 suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');
  

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);

