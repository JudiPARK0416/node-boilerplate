const { clear } = require("console");

let num = 1;

const interval = setInterval(() => {
  // this will contuinously run every second unless stopped
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log("Timeout");
  clearInterval(interval);
}, 6000);
// this will run after 6 seconds
