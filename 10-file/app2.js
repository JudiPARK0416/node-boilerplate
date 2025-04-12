const fs = require("fs").promises;

// read a file
fs.readFile("./file.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);
// <Buffer 0a 68 65 6c 6c 6f 21 0a>
// hello!

// writing a file
fs.writeFile("./file.txt", "hello world!").catch(console.error);

// add to a file
fs.appendFile("./file.txt", "hello world! again!").catch(console.error);

// copy a file
fs.copyFile("./file.txt", "./file2.txt").catch(console.error);

// folder
// make a folder
fs.mkdir("sub-folder").catch(console.error);

// read directory
fs.readdir("./").then(console.log).catch(console.error);
