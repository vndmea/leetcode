/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function (root) {
    let res = []

    function dfs(node, res, depth) {
        if (!node) return

        if (res.length === depth) {
            res.push(node.val)
        }

        dfs(node.right, res, depth + 1)
        dfs(node.left, res, depth + 1)
    }

    dfs(root, res, 0)
    return res
};