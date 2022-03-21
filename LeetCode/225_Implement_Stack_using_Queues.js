var MyStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    return this.stack.pop();
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.stack.at(-1);
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  this.stack = [];
  return false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
const top = myStack.top(); // return 2
console.log(top);
const pop = myStack.pop(); // return 2
console.log(pop);
myStack.empty(); // return False
