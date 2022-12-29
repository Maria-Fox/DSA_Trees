/** BinaryTreeNode: node for a general tree. */

// refer to https://javascript.plainenglish.io/javascript-solution-to-minimum-depth-of-binary-tree-1798a8f516f0
// let treeNode = new BinaryTreeNode(2, new BinaryTreeNode(2, 1, 3), new BinaryTreeNode(3, 2, 4));
// undefined
// let newClassTree = new BinaryTree(treeNode);

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  // depth approach
  minDepth() {
    if(!this.root) return 0;
    // go from root
    // check left branch if none- switch to right
    // check right branch if none- switch to left
    // initiate depth at one accounting for root 
    let depth = 1;
    
    function minDepthHelper(node){
      if(!node.left && !node.right) return depth;

      // incrementing by one to increase depth
      if(!node.left) return minDepthHelper(node.right) +1;
      if(!node.right) return minDepthHelper(node.left) +1;

      // grab min of the left and right 
      return(Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) +1)
    };

    return minDepthHelper(this.root);
  };

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  // depth approach
  maxDepth() {

    if(!this.root) return 0;
    // depth initialized at one to account for root.
    let depth = 1;

    function maxDepthHelper(node){

      if(!node.left && ! node.right) return depth;
      // adding one to depth after each cycle
      if(!node.left) return maxDepthHelper(node.right) +1;
      if(!node.right) return maxDepthHelper(node.left) +1;

      // returns farthest tree node - recursively
      return(Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) +1)
    };

    maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root) return 0;
    let totalSum = 0;
    let sumArr = [this.root];

    function sumHelper(node) {
      if(node === null) return 0;

      const leftSum = sumHelper(node.left);
      const rightSum = sumHelper(node.right);

      // goes through left & right side of tree & returns the max they can add up to.
      totalSum = Math.max(totalSum, node.val + leftSum +rightSum);
      // create recursive case adding to left & right each time.
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    sumHelper(this.root);
    return totalSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */


  nextLarger(lowerBound) {
    if(!this.root) return null;
    let output = null;
    let queue = [this.root];

    while(queue.length) {
      let currentNode = queue.shift();
      if(currentNode.val > lowerBound){
        // check what the lowest is from the current node, what we previously checked, OR default to current
        console.log("before output", output)
        // leave || currentNode.val in case it's comparing against null which is NaN 
        output = Math.min(currentNode.val, output || currentNode.val);
        console.log("now output is", output)
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return output;
  }


  // /** Further study!
  //  * areCousins(node1, node2): determine whether two nodes are cousins
  //  * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  // /** Further study!
  //  * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  // /** Further study!
  //  * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  // /** Further study!
  //  * lowestCommonAncestor(node1, node2): find the lowest common ancestor
  //  * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
