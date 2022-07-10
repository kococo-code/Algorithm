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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const queue = [];
  const levelOrderTraversal = [];
  function bfs(node, level) {
    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
    if (!levelOrderTraversal[level]) levelOrderTraversal[level] = [];
    levelOrderTraversal[level].push(node.val);
    if (queue.length === 0) return;
    const [_node, _level] = queue.shift();
    bfs(_node, _level);
  }
  if (root) {
    bfs(root, 0);
  }
  return levelOrderTraversal;
};
