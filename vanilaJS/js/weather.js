const API_KEY = "0439b9206862f08316c09c6391613aef";

function onGeoOk (position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in ", lat, lng)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
}
function onGeoError () {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)