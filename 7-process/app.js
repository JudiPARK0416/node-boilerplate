const process = require("node:process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}, 0);

process.nextTick(() => {
  // this is for the next tick of the event loop
  // this will be executed before the setTimeout callback
  console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
  console.log("for loop");
}
