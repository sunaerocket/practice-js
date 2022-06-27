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
