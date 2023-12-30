var MyStack = function () {
    this.stack = [];
};

MyStack.prototype.push = function (x) {
    this.stack.push(x);
};

MyStack.prototype.pop = function () {
    if (this.stack.length === 0) {
        return null; 
    }
    return this.stack.pop();
};

MyStack.prototype.top = function () {
    if (this.stack.length === 0) {
        return null; 
    }
    return this.stack[this.stack.length - 1];
};

MyStack.prototype.empty = function () {
    return this.stack.length === 0;
};


