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
