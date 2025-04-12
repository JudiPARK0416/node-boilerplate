const fs = require("fs");

// All APIs are provided by one of the following three modules:
// rename(....., callback(err, data)) //! -> async
fs.rename("./hello.txt", "./world.txt", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("File renamed successfully");
  }
});
// try {renameSync(.....)} catch (e) {} //! -> sync(blocking), returns nothing, stops the execution. therefore needs to be inside a try-catch block 가급적 사용 자제
try {
  fs.renameSync("./hello.txt", "./world.txt");
} catch (error) {
  console.error(error);
}

// promises.rename().then().catch() //! -> async
fs.promises
  .rename("./hello.txt", "./world.txt")
  .then(() => {
    console.log("File renamed successfully");
  })
  .catch((error) => {
    console.error(error);
  });
