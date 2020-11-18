/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return dfs(root, -Infinity, Infinity)
    function dfs(root, min, max) {
        if (!root) return true;
        if (root.val >= max || root.val <= min) return false
        return dfs(root.left, min, Math.min(root.val, max)) && dfs(root.right, Math.max(root.val, min), max)
    }

};