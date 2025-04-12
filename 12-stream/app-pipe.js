const fs = require("fs");
const zlib = require("zlib"); // zlib is a built-in module in Node.js for compression and decompression

const readStream = fs.createReadStream("./file.txt")
const zlibStream = zlib.createGzip(); // create a gzip stream
const writeStream = fs.createWriteStream("./file4.zip");

const piping = readStream.pipe(zlibStream).pipe(writeStream); // piping the read stream to the write stream
piping.on("finish", () => {
  console.log("done!!");
});