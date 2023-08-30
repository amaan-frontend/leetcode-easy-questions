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
                          
