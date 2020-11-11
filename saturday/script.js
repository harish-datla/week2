


// var request = new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/all',true)
// request.send();
// request.onload = function(){
// var data = JSON.parse(this.response);
// console.log(data);
// }
// console.log('Hello World');



// function weatherBalloon( cityID ) {
//     var key = '1c1975193e0c2132f2cc14daea98f868';
//     var request = new XMLHttpRequest();
//     request.open('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key);
//     request.send();
//     request.onload = function(){
//     var data = JSON.parse(this.response);
//     console.log(data);
//     }
//   }
//   weatherBalloon(6167865);


  function temperatureByCityID( cityID ) {
    var key = '1c1975193e0c2132f2cc14daea98f868'
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
    });
  }

  function temperatureByCity( cityName ) {
    var key = '1c1975193e0c2132f2cc14daea98f868'
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
    });
  }

  https://api.openweathermap.org/data/2.5/weather?lat=43.700111&lon=-79.416298&appid={yourkey}
  function temperatureByLatAndLong( lat,long ) {
    var key = '1c1975193e0c2132f2cc14daea98f868'
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + long+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
    });
  }
  
  window.onload = function() {
    temperatureByCityID( 6167865 );
    temperatureByCity('Toronto');
    temperatureByLatAndLong(43.700111,-79.416298);
  }