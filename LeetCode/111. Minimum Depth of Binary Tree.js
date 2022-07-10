// https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/
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
var minDepth = function (root) {
  let min = Infinity;
  function dfs(node, depth) {
    if (!node.left && !node.right) {
      min = Math.min(min, depth);
    }
    if (node.left) dfs(node.left, depth + 1);
    if (node.right) dfs(node.right, depth + 1);
  }
  if (root) {
    dfs(root, 1);
  } else {
    min = 0;
  }
  return min;
};
