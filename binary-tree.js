/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  isLeaf() {
    return ((this.left === null) && (this.right === null));
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) return 0; // handle empty tree
    let depth = 1;
    let traversed = 0;
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      traversed++;
      if (Math.pow(2, depth) === traversed) depth++; // if 2^depth nodes have been searched, increment depthf
      if (current.isLeaf()) return depth; // the first leaf found is the min depth
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) return 0; // handle empty tree
    let depth = 0;
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      depth++;
      for (let i = 0; i < toVisitQueue.length; i++) {
        let node = toVisitQueue.shift();
        if (node.left) toVisitQueue.push(node.left);
        if (node.right) toVisitQueue.push(node.right);
      }
    }
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;
    if (this.root === null) return 0; // handle empty tree

    function isLeaf(node) {
      return ((node.left === null) && (node.right === null));
    }

    function findMax(node) {
      if (isLeaf(node)) {
        return node.val;
      } else {
        let leftMax = 0;
        let rightMax = 0;
        if (node.left) {
          leftMax = findMax(node.left);
        }
        if (node.right) {
          rightMax = findMax(node.right);
        }
        const childMax = Math.max(leftMax, rightMax);
        const childRootMax = Math.max(node.val, childMax + node.val);
        const pathMax = Math.max(childRootMax, node.val + leftMax + rightMax);
        maxSum = Math.max(maxSum, pathMax);
        return childRootMax;
      }
    }

    findMax(this.root);
    return maxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return null; // handle empty tree
    let min = null;
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if (current.val > lowerBound) {
        if (!min || (min > current.val)) {
          min = current.val;
        }
      }
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return min;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
