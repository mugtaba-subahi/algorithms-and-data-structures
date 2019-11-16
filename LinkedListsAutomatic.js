class LinkedList {
  constructor(nodes) {
    this.list = this.connectNodes(nodes);
  }

  connectNodes(nodes) {
    const linkedList = nodes.map((node, index) => {
      let previous = null;
      let next = null;

      // if first node, ignore previous node
      if (index !== 0) {
        previous = new Node(nodes[index - 1]);
      }

      // if last node, ignore previous node
      if (index !== nodes.length - 1) {
        next = new Node(nodes[index + 1]);
      }

      return new Node(node, previous, next);
    });

    return linkedList;
  }
}

class Node {
  constructor(data, previous = null, next = null) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

const nodes = [6, 3, 1, 4, 5, 3, 5, 6, 4];
const list = new LinkedList(nodes);

console.log(list.list);
