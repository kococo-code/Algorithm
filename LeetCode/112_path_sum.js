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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let result = false;
  function dfs(node, sum) {
    sum += node.val;
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        result = true;
      }
      return;
    }
    if (node.left) dfs(node.left, sum);
    if (node.right) dfs(node.right, sum);
  }
  if (!root) return false;
  dfs(root, 0);
  return result;
};
