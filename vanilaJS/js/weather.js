function onGeoOk (position) {
  console.log(position)
}

function onGeoError () {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)