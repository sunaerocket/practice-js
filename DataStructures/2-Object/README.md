# Object 객체

> 여러 데이터를 키-값 형태로 결합시킨 복합 자료형

## 초기화

```javascript
// initialize.js

const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "김객체", address: "메모리" };

console.log(obj1, obj2, obj3);
```

## 활용법

```javascript
// usage.js

// 키, 값 추가
const obj1 = { name: "김객체", address: "메모리" };

obj1["email"] = "some@email.com";
obj1.phone = "00000000000";
console.log(obj1);

// 키, 값 제거
delete obj1.phone;
console.log(obj1);

// 키 검색
console.log("email" in obj1);
console.log("phone" in obj1);

// keys: 키 집합을 배열로 반환
const obj2 = { key1: "value1", key2: "value2", key3: "value3" };
console.log(Object.keys(obj2));

// for in: 객체 순회

for (const key in obj2) {
  console.log(key, obj2[key]);
}
```
