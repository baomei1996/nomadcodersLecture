const API_KEY = "0439b9206862f08316c09c6391613aef";

function onGeoOk (position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherContainer = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      weatherContainer.innerText = data.name;
      city.innerText =` ${data.weather[0].main} / ${data.main.temp} / ${data.weather[0].icon}`;
    });

}
function onGeoError () {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)