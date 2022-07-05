/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const leftStack = [];
  const rightStack = [];
  function dfs(node, stack) {
    stack.push(node.val);
    if (node.left) {
      dfs(node.left, stack);
    } else {
      stack.push(null);
    }
    if (node.right) {
      dfs(node.right, stack);
    } else {
      stack.push(null);
    }
  }
  if (!p && !q) return true;
  if (!p || !q) return false;
  dfs(p, leftStack);
  dfs(q, rightStack);
  return leftStack.join() === rightStack.join();
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const tree = new TreeNode(1);
tree.left = new TreeNode(1);
const right = new TreeNode(2);
tree.right = right;

const _tree = new TreeNode(1);
_tree.left = new TreeNode(1);
_tree.right = new TreeNode(2);
console.log(isSameTree(tree, _tree));
