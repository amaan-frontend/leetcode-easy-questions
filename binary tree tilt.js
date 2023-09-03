class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findTilt(root) {
    let totalTilt = 0;

    // Recursive function to calculate the sum of values in the subtree rooted at a node.
    function sumSubtree(node) {
        if (!node) {
            return 0;
        }

        const leftSum = sumSubtree(node.left);
        const rightSum = sumSubtree(node.right);

        // Calculate the tilt for the current node and update the total tilt.
        totalTilt += Math.abs(leftSum - rightSum);

        // Return the sum of values in the current subtree rooted at 'node'.
        return node.val + leftSum + rightSum;
    }

    // Start the recursion from the root node.
    sumSubtree(root);

    return totalTilt;
}
