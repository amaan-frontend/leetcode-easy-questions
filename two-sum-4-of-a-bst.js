class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function findTarget(root, k) {
    const encountered = new Set();
    
    function dfs(node) {
        if (!node) return false;
        
        const complement = k - node.val;
        
        if (encountered.has(complement)) {
            return true;
        }
        
        encountered.add(node.val);
        
        return dfs(node.left) || dfs(node.right);
    }
    
    return dfs(root);
}
