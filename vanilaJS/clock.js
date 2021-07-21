const clock = document.querySelector("h2#clock")

/*function sayHello () {
  console.log('Hello');

}
*/
//setInterval(sayHello, 5000); //5초마다 

//setTimeout(sayHello, 5000)

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);