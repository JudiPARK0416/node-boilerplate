const os = require("os");

console.log(os.EOL); // End of line === '\n'
console.log(os.EOL === "\n"); // true @ mac
console.log(os.EOL === "\r\n"); // false @ mac, true @ windows
