/* 프린터 문제
 *
 * 중요한 문서는 먼저 인쇄하기 위해 우선순위 개념을 도입
 * 1. 인쇄 대기열의 front(문서 A) dequeue
 * 2. 대기목록에서 A보다 중요도가 높은 문서가 존재하면 A를 enqueue
 * 3. 없으면 A 인쇄
 *
 * 문서의 인덱스가 주어질 때, 몇 번째로 인쇄되는지 출력하기
 *
 * https://programmers.co.kr/learn/courses/13213/lessons/91078
 */

function solution(priorities, location) {
  const queue = new Queue();

  priorities.forEach((item, index) => {
    queue.enqueue([item, index]);
  });

  priorities.sort((a, b) => b - a);

  let count = 0;

  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}

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
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

console.log(solution([2, 1, 3, 2], 2));
// solution([1, 1, 9, 1, 1, 1], 0);
