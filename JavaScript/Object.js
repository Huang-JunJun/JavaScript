let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

pockets.__proto__ = bed
bed.__proto__ = table
table.__proto__ = head

let animal = {
    eat() {
      this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// 这只仓鼠找到了食物
speedy.eat("apple");
console.log(speedy.stomach);

// 这只仓鼠也找到了食物，为什么？请修复它。
console.log(lazy.stomach);