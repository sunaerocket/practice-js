// 배열은 사실 객체다
const arr = [];
console.log(typeof arr);

arr["key"] = "value";
console.log(arr);

// 배열의 길이는 키-밸류를 셈하지 않는다
console.log(arr.length);
