/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER

    function dfs(node) {
        if (!node) {
            return 0
        }
        const left = Math.max(0, dfs(node.left)) // 屏蔽负值
        const right = Math.max(0, dfs(node.right)) // 屏蔽负值
        maxSum = Math.max(maxSum, left + right + node.val) // 最大值
        return Math.max(left, right) + node.val // 分支最大
    }

    dfs(root)
    return maxSum
};