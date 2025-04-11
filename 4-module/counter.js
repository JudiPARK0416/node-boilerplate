let count = 0;
function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
// module.exports.increase = increase; // this can work same as exports.increase = increase;
// exports.increase = increase; // but if this is used, then module.exports will be overridden, eventually leading to an empty object - dangerous

console.log(module.exports ===  exports); // true
exports = {}
console.log(module.exports ===  exports); // false
exports.increase = increase; // this will not work, because exports is a reference to module.exports, but if we reassign exports, it will not be the same anymore