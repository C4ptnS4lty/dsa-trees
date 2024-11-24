/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  //Helper recursive method

  /** sumValues(): add up all of the values in the tree. */

  sumValues(branch = this.root) {
    if(!branch) return 0;

    let sum = 0;
    sum += branch.val;

    branch.children.forEach(child => {
      sum += this.sumValues(child);
    });

    return sum;
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(branch = this.root) {
    if(!branch) return 0;

    let count = 0;
    if (branch.val % 2 == 0) {
      count ++;
    }

    branch.children.forEach(child => {
      count += this.countEvens(child);
    });

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, branch = this.root) {
    if(!branch) return 0;

    let count = 0;

    if (branch.val > lowerBound) count++;

    branch.children.forEach(child => {
      count += this.numGreater(lowerBound,child);
    });

    return count;
  }
}

module.exports = { Tree, TreeNode };
