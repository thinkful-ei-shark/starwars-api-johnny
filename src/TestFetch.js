const fetch = require('node-fetch');

let homeWorldUrl = 'https://swapi-thinkful.herokuapp.com/api/planets/1/';

fetch(homeWorldUrl, {
  // headers: {
  //   'content-type' : 'application/json'
  // }
})
.then(response => response.json())
.then(data => {
  console.log(data.name);
})
.catch(error => console.log(error));