const fs = require("fs");
console.log(global);
global.hello = () => {
  console.log("Hello"); // this and
  global.console.log("Hello"); // this are the same
};

global.hello(); // this and
hello(); // this are the same
