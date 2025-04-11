const path = require("path");

console.log(__dirname);
console.log(__filename);
// /Users/judy/desktop/Node/9-path/
// /Users/judy/desktop/Node/9-path/app.js

// it can be different in different OS
//! so it is important to use path to be able to use the file regardless of the OS

console.log(path.sep); // / on mac, \ on windows
console.log(path.delimiter); // : on mac, ; on windows

// basename
console.log(path.basename(__filename)); // app.js
console.log(path.basename(__filename, ".js"));

// dirname
console.log(path.dirname(__filename)); // /Users/judy/desktop/Node/9-path

// extension
console.log(path.extname(__filename)); // .js

// parse
const parsed = path.parse(__filename);
console.log(parsed);
// {
//   root: '/',
//   dir: '/Users/judy/desktop/Node/9-path',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }
parsed.root; // /
parsed.name; // app

const str = path.format(parsed);
console.log(str); // /Users/judy/desktop/Node/9-path/app.js

// isAbsolute
console.log("isAbsolute", path.isAbsolute(__filename)); // true
console.log("isAbsolute", path.isAbsolute("../")); // false

// normalize
console.log(path.normalize("./folder/////sub")); // folder/sub

// join
console.log(path.join(__dirname, "..", "..", "/")); // /Users/judy/desktop -> but this will cause an error at windows
console.log(__dirname + path.sep + ".." + path.sep + ".." + path.sep); // /Users/judy/desktop/Node/9-path/../..
console.log(path.join(__dirname, "..", "..")); // /Users/judy/desktop/Node
