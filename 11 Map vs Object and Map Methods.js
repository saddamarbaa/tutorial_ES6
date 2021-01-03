/*
  Map
*/

// - Map vs Object

let myMap = new Map();
myMap.set("10", "string").set(10, "numbers").set(false, "boolean");
myMap.set("lass", "ok");
myMap.set({ a: 2, b: 23 }, "object");
console.log(myMap);

let myMap2 = new Map([
  ["10", "string"],
  [10, "numbers"],
  [false, "boolean"],
  [{ a: 2, b: 23 }, "object"],
]);

console.log(myMap2);

//  Map Methods

console.log(`my map element count is : ${myMap2.size}`);
console.log(`get method : ${myMap2.get(10)}`);
console.log(`has method : ${myMap2.has(10)}`);
console.log(`my map element count is : ${myMap2.size}`);
console.log(`has method : ${myMap2.delete("10")}`);
console.log(`my map element count is : ${myMap2.size}`);
console.log(`has method : ${myMap2.clear()}`);
console.log(`my map element count is : ${myMap2.size}`);
