class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findTarget(root, target) {
  // type your code here
  if (root === null || root.value === target)
    return root;

  if (root.value > target)
    return findTarget(root.left, target);
  return findTarget(root.right, target);
}

if (require.main === module) {
  // add your own tests in here
  const root = new Node(1, new Node(-1), new Node(2));
  console.log("Expecting: Node with value 2");
  console.log(findTarget(root, 2));

  console.log("");

  console.log("Expecting: null");
  console.log(findTarget(root, 5));

  const bst = new Node(5);
  console.log('');
  console.log("Expecting: Node with 5");
  console.log("=>", findTarget(bst, 5));

  console.log('');
  console.log("Expecting: null");
  console.log("=>", findTarget(bst, 6));

  bst.left = new Node(3);
  bst.right = new Node(8);
  console.log('');
  console.log("Expecting: Node with 3");
  console.log("=>", findTarget(bst, 3));

  console.log('');
  console.log("Expecting: Node with 8");
  console.log("=>", findTarget(bst, 8));

  console.log('');
  console.log("Expecting: mull");
  console.log("=>", findTarget(bst, 6));

}

module.exports = { findTarget, Node };

// Please add your pseudocode to this file
// And a written explanation of your solution
