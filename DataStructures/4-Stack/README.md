# Stack 스택

> Last In First Out. 후입선출 개념을 가진 선형 자료구조
> 주로 바닥이 막힌 상자에 비유

## Array로 사용하기

WithArray.js

```javascript
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // [1, 2, 3]

stack.pop();
console.log(stack); // [1, 2]

// top 구하기
console.log(stack[stack.length - 1]); // 2
```

## Linked List로 구현

WithLinkedList.js

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3

stack.pop();
console.log(stack.pop()); // 1
```
