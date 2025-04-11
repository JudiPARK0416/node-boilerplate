console.log("logging...");
console.clear();

// log level
console.log("log"); // development
console.info("info"); // information
console.warn("warn"); // warning
console.error("error"); // error, user error, system error

// console.assert() - 특정한 조건일때만 출력
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = { name: "judy", age: 28 };
console.log(student);
console.table(student); // table 형태로 출력
console.dir(student); // object 형태로 출력