class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sumOfLeftLeaves(root) {
    if (!root) {
        return 0;
    }

    let sum = 0;

    // Check if the left child of the current node is a leaf node
    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
    }

    // Recurse on the left and right subtrees
    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);

    return sum;
}

// Example usage
const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

console.log(sumOfLeftLeaves(root)); // Output: 24
                                                                                                                        

