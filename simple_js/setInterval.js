//setInterval

// setInterval(function () {
//   console.log(`This function will be executed every 2 seconds`);
// }, 2000);

//setTimeout

// setTimeout(function () {
//   console.log(`This function will be executed after 5 seconds`);
// }, 5000);

const interval = setInterval(function () {
  console.log(`This function is being exectueed at interval`);
}, 1000);

setTimeout(function () {
  clearInterval(interval);
  console.log(`Interval Stopped.`);
}, 10000);
