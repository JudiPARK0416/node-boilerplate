const fs = require("fs");
const data = [];

// stream = event based
const readStream = fs.createReadStream("./file.txt", {
  //   highWaterMark: 8, // default: 64kbytes [highWaterMark - determines the size of the buffer]
  //   encoding: "utf-8",
}).on("data", (chunk) => {
  //   console.log(chunk);
  data.push(chunk);
  console.count("data");
}).on("end", () => {
  console.log(data.join(""));
}).on("error", (err) => {
  console.error(err);
});

// once = once only
readStream.once("data", (chunk) => {
  console.log(chunk);
  console.count("once");
});