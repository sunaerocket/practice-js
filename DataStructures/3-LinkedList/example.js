class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;

    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      text += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }

    text = text.substring(0, text.length - 2);
    text += "]";

    console.log(text);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();

console.log(linkedList.find(3));

linkedList.remove(3);
linkedList.display();

linkedList.insert(linkedList.find(2), 10);
linkedList.display();
