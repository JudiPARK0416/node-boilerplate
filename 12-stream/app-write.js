const fs = require("fs");

const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("Finished writing");
});

writeStream.write("hello!");
writeStream.write("world!");
writeStream.end(); // this will trigger the finish event