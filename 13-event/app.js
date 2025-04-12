const EventEmitter = require("events");
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log("first callback - ", args);
};

emitter.on("judy", callback1);

emitter.on("judy", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("judy", { message: 1 });
emitter.emit("judy", { message: 2 });
// emitter.removeListener('judy', callback1);
emitter.removeAllListeners("judy");
emitter.emit("judy", { message: 3 });

// EventEmitter is used by node.js internally
// for example, 
// createReadStream creates a ReadStream object.
// class ReadStream extends stream.Readable
// Readable extends NodeJS.ReadableStream
// ReadableStream extends EventEmitter

// to stop the event emitter, we need to declare the event emitter as a variable: callback1