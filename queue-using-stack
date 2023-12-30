var MyQueue = function () {
    this.stackOne = []
    this.stackTwo = []
};

MyQueue.prototype.push = function (x) {
    if (!this.stackTwo.length) {
        this.stackOne.push(x)
    } else {
        this.stackTwo.push(x)
    }
};

MyQueue.prototype.pop = function () {
    if (!this.stackTwo.length) {
        let first = this.stackOne[0]
        this.stackTwo = this.stackOne.slice(1)
        this.stackOne = []
        return first
    } else {
        let first = this.stackTwo[0]
        this.stackOne = this.stackTwo.slice(1)
        this.stackTwo = []
        return first
    }
};

MyQueue.prototype.peek = function () {
    if (!this.stackTwo.length) {
        return this.stackOne[0]
    } else {
        return this.stackTwo[0]
    }
};

MyQueue.prototype.empty = function () {
    return !this.stackOne.length && !this.stackTwo.length
};
