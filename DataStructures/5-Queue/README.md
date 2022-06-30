# Queue 큐

> 선입선출(First In First Out) 개념의 선형 자료구조

## 용어

- Front: 가장 앞에 있는 데이터
- Rear: 가장 뒤에 있는 데이터
- DeQueue: 큐에서 데이터 제거
- EnQueue: 큐에 데이터 추가

## Linear Queue 선형 큐

### Array로 표현하기

- 고정된 메모리 주소에서 파생되는 문제
  - 정렬: 요소의 추가 제거로 빈공간이 생기면 O(n) 시간복잡도의 정렬 필요
  - 인덱스: 한계 이상으로 요소를 추가하면 문제가 발생
- JS Array에서는 인덱스 문제는 없지만 입력이 커지면 메모리 점유를 많이 하게 된다

```javascript
// LinearUsingArray.js

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1

queue.enqueue(8);
console.log(queue.size()); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue);
```

### Linked List로 표현하기

- Head가 Front, Tail이 Rear 역할
- 배열 같은 인덱스 문제는 발생하지 않음

```javascript
//LinearUsingLinkedList.js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1

queue.enqueue(8);
console.log(queue.size); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue);
```

### shift 메서드로 구현하는 큐의 단점

- 시간복잡도 O(n)을 가지기 때문에 입력이 클수록 불리

## Circular Queue 환형 큐

> Front와 Rear가 연결된 Queue

> 한정된 메모리 공간을 효율적으로 활용하기 위해 사용

### Array로 표현하기

```javascript
// CircularUsingArray.js

class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = [];
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full.");
      return;
    }

    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}

const queue = new Queue(4);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.enqueue(16); // Queue is full.

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2

console.log(queue.size); // 2
console.log(queue.peek()); // 4

queue.enqueue(16);
queue.enqueue(32);
console.log(queue.isFull()); // true

console.log(queue);
```

### Linked List로 표현하기는 부적절

- 한정된 메모리 공간에서 사용하기 위한 방법이기 때문에 이점이 없다
