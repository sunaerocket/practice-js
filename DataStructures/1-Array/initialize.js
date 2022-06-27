// 초기화 방식

const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(5);
const arr6 = Array.from(Array(5), (value, key) => {
  return key + 1;
});

console.log(arr1, arr2, arr3, arr4, arr5, arr6);
