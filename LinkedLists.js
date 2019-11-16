class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// manually create nodes
const nodeA = new Node(6);
const nodeB = new Node(3);
const nodeC = new Node(1);
const nodeD = new Node(4);
const nodeE = new Node(5);

// manually link nodes
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

let counter = 0;

// count number of nodes in a linked-list recusively
const countNode = node => {
  if (!node.next) return ++counter;

  ++counter;
  countNode(node.next);
};

countNode(nodeA);

console.log(`There are ${counter} nodes in the linked list`);
