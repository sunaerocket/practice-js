# Hash Table 해시 테이블

> 키와 값을 받아 키를 해싱하여 나온 인덱스에 값을 저장하는 선형 자료구조

## 용어

- key: 값을 호출하기 위한 열쇠 역할. 모든 데이터 타입 가능(객체 및 원시 자료형)
- value: 저장된 데이터
- hashing: 주어진 데이터를 다른 값으로 변환하는 프로세스
- hash function: 입력받은 값을 특정 범위 내 숫자로 변경하는 함수
- hash collision: 해싱된 값이 다른 값이랑 겹치는 경우를 의미

## 시간 복잡도

> 고속으로 데이터 처리 가능

- 삽입 => O(1)
- 삭제 => O(1)
- 탐색 => O(1)

## 해시 충돌의 대안

### 선형 탐사법

- 충돌 발생한 지점에서 옆으로 한칸 이동한 메모리 주소에 저장
- 데이터가 몰리는 특성
- 최악의 경우 O(n) 시간복잡도

### 제곱 탐사법

- 충돌 발생하면 발생한 횟수의 제곱만큼 옆으로 이동한 메모리 주소에 저장
- 선형 탐사법보다 데이터가 몰리는 문제 완화

### 이중 해싱

- 충돌이 발생하면 다른 해시 함수를 이용하여 새로운 인덱스 생성
- 재충돌이 발생하면 충돌이 없을 때까지 해시함수로 새로운 인덱스 생성

### 분리 연결법

- 버킷의 값을 연결 리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가
- 충돌이 무한대로 일어나는 경우 메모리를 무한대로 소모

## 사용 예시

회원 정보를 관리한다고 가정

- 배열: 인덱스를 모르는 경우, 탐색에 O(n) 시간 소요
- 연결 리스트: 추가, 제거는 O(1). 조회는 O(n)으로 상대적으로 느림
- 해시 테이블: 이름을 키로 삼아 값을 저장하면 O(1) 시간으로 조회 가능

따라서 빠른 데이터 조회가 필요한 경우, 해시 테이블이 적합하다.

## JS에서 활용하기

### Array

- 변칙적인 사용법으로 권장하지 않음

```javascript
// UsingArray.js

const table = [];

table["key"] = 100;
table["key2"] = "Hello";
console.log(table["key"]); // 100

table["key"] = 349;
console.log(table["key"]); // 349

delete table["key"];
console.log(table["key"]); // undefined
```

### Object

- key는 문자열만 활용 가능

```javascript
// UsingObject.js

const table = {};

table["key"] = 100;
table["key2"] = "Hello";
console.log(table["key"]); // 100

table["key"] = 349;
console.log(table["key"]); // 349

delete table["key"];
console.log(table["key"]); // undefined
```

### Map

- Key에 객체, 원시 타입 데이터를 모두 사용 가능
- 상속 기능 없이, 데이터 저장 기능만 활용
- 순회가 편리
- 편의성 내장 함수 활용

```javascript
//UsingMap.js

const table = new Map();

table.set("key", 100);
table.set("key2", "Hello");
console.log(table["key"]); // undefined
console.log(table.get("key")); // 100

const object = { a: 1 };
table.set(object, "A1"); // Map은 Object도 key로 사용 가능
console.log(table.get(object)); // A1

table.delete(object);
console.log(table.get(object)); // undefined
console.log(table.keys()); // { 'key', 'key2' }
console.log(table.values()); // { 100, 'Hello' }

table.clear();
console.log(table.values()); // {}
```

### Set

-

```javascript
// UsingSet.js

const table = new Set();

table.add("key"); // key, value를 동일하게 저장
table.add("key2");
console.log(table.has("key")); // true
console.log(table.has("key3")); // false

table.delete("key2");
console.log(table.has("key2")); // false

table.add("key3");
console.log(table.size); // 2

table.clear();
console.log(table.size); // 0
```
