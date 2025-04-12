// Buffer = fixed size chunk of memory, array of integers, bytes of data
const buf = Buffer.from("Hi");
console.log(buf); // <Buffer 48 69> - unicode
console.log(buf.length); // 2
console.log(buf[0]); // 72 - ascii code
console.log(buf[1]); // 105
console.log(buf.toString()); // Hi

// create
const buf2 = Buffer.alloc(2); // 2 bytes
const buf3 = Buffer.allocUnsafe(2); // 2 bytes -> when there is enough memory, it will be faster
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString()); // Hi
buf2.copy(buf3); // copy buf2 to buf3
console.log(buf3); // <Buffer 00 00> - not initialized


// concatenate
const newBuf = Buffer.concat([buf, buf2, buf3   ]);
console.log(newBuf); // <Buffer 48 69 48 69 48 69>
console.log(newBuf.toString()); // HiHiHi