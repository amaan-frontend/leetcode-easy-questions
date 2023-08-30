class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children || [];
    }
}

function maxDepth(root) {
    if (!root) {
        return 0;
    }

    let maxChildDepth = 0;
    for (const child of root.children) {
        const childDepth = maxDepth(child);
        maxChildDepth = Math.max(maxChildDepth, childDepth);
    }

    return maxChildDepth + 1;
}

// Example 1
const root1 = new Node(1, [
    new Node(3, [new Node(5), new Node(6)]),
    new Node(2),
    new Node(4)
]);
console.log(maxDepth(root1));  // Output: 3

// Example 2
const root2 = new Node(1, [
    new Node(2, [new Node(6), new Node(7, [new Node(11, [new Node(14)])])]),
    new Node(3, [new Node(8, [new Node(12)])]),
    new Node(4, [new Node(9, [new Node(13)]), new Node(10)])
]);
console.log(maxDepth(root2));  // Output: 5
                                                                                                    
