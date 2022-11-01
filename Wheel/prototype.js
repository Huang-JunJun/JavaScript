let Person = function() {
  this.name = 'xiaobai'
}

console.log(typeof Person.prototype);
console.log(Person.prototype);

Person.prototype.getValue = function() {
  this.name = 'xiaohong'
}

let person1 = new Person()
let person2 = new Person()

console.log(person1);
console.log(person2);

const num = new String()
console.log(String.prototype.isPrototypeOf(num));