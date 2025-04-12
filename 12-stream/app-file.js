const fs = require("fs");

const beforeMem = process.memoryUsage().rss; // saving the memory usage before the operation
fs.readFile("./file.txt", (_, data) => { // read the file
  fs.writeFile("./file2.txt", data, () => {}); // write the file in new file
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed memory: ${consumed} MB`);
});
