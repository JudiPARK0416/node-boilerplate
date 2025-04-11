function hello() {
  console.log(this);
  console.log(this === global);
}

hello(); // 'this' is the same as 'global'

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("==== class ====");
    console.log(this); // this is the same as 'A'
    console.log(this === global);
  }
}


const a = new A(1);
a.memberFunction();

console.log('==== global ====');
console.log(this);
console.log(this===module.exports); 

// ... this can mean different things depending on the context - module exports