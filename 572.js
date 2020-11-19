/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (s == null && t == null) return true
    if (s == null || t == null) return false

    if (isSameTree(s, t)) {
        return true
    }

    return isSubtree(s.left, t) || isSubtree(s.right, t)
};

function isSameTree(s, t) {
    if (s == null && t == null) return true
    if (s == null || t == null) return false

    return s.val === t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
}