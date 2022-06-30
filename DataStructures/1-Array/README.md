# Array 배열

> 연관된 데이터를 연속적인 메모리에 모아서 처리하기 위한 자료구조

## 특성

- 컴퍼일 언어에서는 크기가 고정되어 있으나, 스크립트 언어에서는 보통 동적으로 크기를 증감하도록 구현
- 원하는 요소의 index를 알고 있다면 O(1) 시간을 소요하여 조회
- 요소의 추가, 제거는 최악의 경우 O(n) 시간이 소요

따라서 탐색 위주로 사용을 권장하고 데이터 추가/제거가 많은 경우 권장하지 않는다

## 초기화

```javascript
// initialize.js

const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(5);
const arr6 = Array.from(Array(5), (value, key) => {
  return key + 1;
});

console.log(arr1, arr2, arr3, arr4, arr5, arr6);
```

## Property 속성

```javascript
// property.js

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);

arr.length = 3;
console.log(arr); // 참조할 메모리 영역이 축소

arr.length = 10;
console.log(arr); // 참조할 메모리 영역이 확대(빈값)
```

## Method 메서드

```javascript
// method.js

// join: 배열을 문자열로 가공하여 반환
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.join(", "));

// reverse: 순서를 역순으로 변경
const arr2 = [1, 2, 3];

arr2.reverse();
console.log(arr2);

// concat: 두 배열을 결합한 신규 배열로 반환
const arr3 = [1, 3, 5];
const arr4 = [2, 4, 6];

console.log(arr3.concat(arr4));

// push & pop: 배열의 꼬리에 요소를 추가, 제거
const arr5 = [1, 2, 3];

arr5.push(7);
console.log(arr5);

arr5.pop();
console.log(arr5);

// shift & unshift: 배열의 머리에 요소를 추가, 제거
const arr6 = [1, 2, 3];

arr6.shift();
console.log(arr6);

arr6.unshift(10);
console.log(arr6);

// slice: 배열의 일부만 가져와서 신규 배열로 반환
const arr7 = [6, 7, 8, 9, 10];

console.log(arr7.slice(2, 4));

// splice: 배열의 일부만 제거
const arr8 = [1, 2, 3, 4, 5];

arr8.splice(2, 2);
console.log(arr8);

// for of: 배열 순회 기능
const arr9 = [1, 2, 3, 4, 5];
for (const item of arr9) {
  console.log(item);
}
```

## Trivia 잡지식

```javascript
// trivia.js

// 배열은 사실 객체다
const arr = [];
console.log(typeof arr);

arr["key"] = "value";
console.log(arr);

// 배열의 길이는 키-밸류를 셈하지 않는다
console.log(arr.length);
```
