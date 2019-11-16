class LinkedList {}

class Node {
  constructor(data, name) {
    this.data = data;
    this.name = name;
    this.next = null;
  }
}

const nodeA = new Node(6, 'A');
const nodeB = new Node(3, 'B');
const nodeC = new Node(1, 'C');

nodeA.next = nodeB;
nodeB.next = nodeC;

console.log(nodeB);
