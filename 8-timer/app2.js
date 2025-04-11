// console.log("code1");
// setTimeout(() => {
//   console.log("setTimeout 0");
// }, 0);

// console.log("code2");
// setImmediate(() => {
//   console.log("setImmediate");
// });

// console.log("code3");
// process.nextTick(() => {
//   console.log("nextTick");
// });

// // code1
// // code2
// // code3
// // nextTick <- this will be executed first
// // setTimeout 0
// // setImmediate

console.log("code1");
console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0");
  console.log("setTimeout 0");
}, 0);

// code1
// timeout 0: 0.1ms
// setTimeout 0

for (let i = 0; i < 100; i++) {
  console.log("for loop");
}

// for loop ... 100 times
// timeout 0: 2.927ms
// setTimeout 0
