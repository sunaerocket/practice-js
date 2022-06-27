// length

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);

arr.length = 3;
console.log(arr); // 참조할 메모리 영역이 축소

arr.length = 10;
console.log(arr); // 참조할 메모리 영역이 확대(빈값)
