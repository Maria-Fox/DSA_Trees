/** TreeNode: node for a general tree. */
// let newT = new Tree (new TreeNode(4, [new TreeNode(5, [new TreeNode(6)])]))


class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  };

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // accumulate all values
        total += child.val;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // check each node against mod 2, if === 0 add
    // if tree is empty return 0
    if(!this.root) return 0;
    
    // if it has a root initialize the even count based on modulo result.
    let evensCount = this.root.val %2 === 0 ? 1 : 0;

    function detectEvens(node){
      // loop thru the nodes
      for(let child of node.children){
        if(child.val % 2 === 0){
          // if evenly dividible by 2 add 1 to the count
          evensCount+=1;
        };

        // if that node has children nodes, throw back into the function using recursion  
        if(child.children.length > 0){
          detectEvens(child);
        }
      }
    }
    detectEvens(this.root);
    return evensCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // compare each node to the lowerBound. If lower add to count

    if(!this.root) return 0;

    let lowerCount = this.root.val > lowerBound ? 1 : 0; 

    function detectLowerNodes(node){
      for(let child of node.children){
        if(child.val > lowerBound){
          lowerCount++;
        };
  
        if(child.children.length > 0){
          detectLowerNodes(child);
        };
      }
    }
    detectLowerNodes(this.root);
    return lowerCount;
  }

  // class bracket ends here
}

module.exports = { Tree, TreeNode };
