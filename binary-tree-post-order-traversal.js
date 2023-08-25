class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function postorderTraversal(root) {
    if (!root) {
        return [];
    }

    const result = [];

    // Traverse the left subtree
    result.push(...postorderTraversal(root.left));

    // Traverse the right subtree
    result.push(...postorderTraversal(root.right));

    // Visit the current node
    result.push(root.val);

    return result;
}
                                                                                        
