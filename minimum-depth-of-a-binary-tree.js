// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
  * @return {number}
   */
var minDepth = function (root) {
    if (root === null) {
        return 0;
    }

    if (root.left === null && root.right === null) {
        return 1;
    }

    if (root.left === null) {
        return minDepth(root.right) + 1;
    }

    if (root.right === null) {
        return minDepth(root.left) + 1;
    }

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// Example usage
const tree1 = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(minDepth(tree1)); // Output: 2

const tree2 = new TreeNode(2,
    null,
    new TreeNode(3,
        null,
        new TreeNode(4,
            null,
            new TreeNode(5, null, new TreeNode(6))
        )
    )
);

console.log(minDepth(tree2)); // Output: 5

