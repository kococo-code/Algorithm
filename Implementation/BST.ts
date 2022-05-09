class LinkedNode {
    val: number
    right: LinkedNode | null
    left: LinkedNode | null
    constructor(val: number = null) {
        this.val = val
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    tree: LinkedNode
    constructor() {
        this.tree = new LinkedNode()
    }
    setRoot(value: number) {
        this.tree.val = value
    }
    insert(value: number) {
        let head = this.tree
        while (head) {
            if (head.val > value) {
                if (head.left !== null) {
                    head = head.left
                } else {
                    head.left = new LinkedNode(value)
                    break
                }
            } else {
                if (head.right !== null) {
                    head = head.right
                } else {
                    head.right = new LinkedNode(value)
                    break
                }
            }
        }
    }
    search(value: number) {
        let head = this.tree
        while (head) {
            if (head.val === value) {
                return head.val
            }
            if (head.val > value) {
                head = head.left
            } else {
                head = head.right
            }
        }
        return null
    }
    min_value_node(node: LinkedNode) {
        let current = node
        // 맨 왼쪽 단말 노드를 찾으러 내려감
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }
    delete(root, value: number) {
        if (root === null) { return root }
        if (value < root.val) {
            console.log("To Left", root)
            root.left = this.delete(root.left, value);
        } else if (value > root.val) {
            console.log("To Right", root)
            root.right = this.delete(root.right, value)
        } else {
            console.log("Search!", { root, value })
            if (root.left === null) {
                const tmp = root.right
                root = null
                return tmp
            } else if (root.right === null) {
                const tmp = root.left
                root = null
                return tmp
            }
            const minNode = this.min_value_node(root.right)
            console.log({ minNode })
            root.val = minNode.val
            root.right = this.delete(root.right, minNode.val)
        }
        return root
    }
}

const tree = new BinarySearchTree()
tree.setRoot(5)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(6)
tree.insert(67)
tree.insert(58)
tree.insert(54)
tree.insert(60)

tree.insert(121)
tree.insert(80)
tree.insert(75)
tree.insert(72)
tree.insert(74)
console.log(tree.search(1))
console.log(tree.search(6))
console.log(tree.delete(tree.tree, 67))
