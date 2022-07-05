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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  const result = [];
  function dfs(node, stack, sum) {
    sum += node.val;
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        result.push([...stack, node.val]);
      }
    }
    if (node.left) dfs(node.left, [...stack, node.val], sum);
    if (node.right) dfs(node.right, [...stack, node.val], sum);
  }
  dfs(root, [], 0);
  return result;
};
