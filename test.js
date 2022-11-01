function A(name, age) {
  this.name = name
  this.age = age

  const B = {
    name: 'xiaobai',
    test: () => {
      console.log('this.name', this.name);
    }
  }

  console.log(B.test());
}

const _1 = 123

const a = new A('xiaohong', 12)

console.log(_1);