/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    return this.stack
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    return this.stack
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let minNum = this.stack[0]

    for(let i = 0; i < this.stack.length; i++) {
        if(minNum > this.stack[i]) {
            minNum = this.stack[i]
        }
    }

    return minNum
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-1)
console.log(obj.getMin());
console.log(obj);
obj.pop()
console.log(obj.top());
console.log(obj);