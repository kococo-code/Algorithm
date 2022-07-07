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
var zigzagLevelOrder = function (root) {
  const queue = [];
  const ret = [];
  function bfs(node, level) {
    if (ret.length < level) ret.push([]);
    if (level % 2 === 1) ret[level - 1].push(node.val);
    else ret[level - 1].unshift(node.val);
    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
    if (queue.length === 0) return;
    const [_node, _level] = queue.shift();
    bfs(_node, _level);
  }
  if (root) {
    bfs(root, 1);
  }
  return ret;
};
