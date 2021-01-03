/*
  forEach(CurrentValue, index, array)
*/

let testDemo = ["A", "B", , "D", "E", "F"];

console.log(testDemo);

for (let index = 0; index < testDemo.length; index++) {
  console.log(`${index} : ${testDemo[index]}`);
}

testDemo.forEach((element, indext) => {
  // console.log(element);
  console.log(`${indext} : ${element}`);
});

// forEach With Set

const demoSet = new Set([1, 1, 1, 2, 2, 3, 3, 4, 4, 12, 2, 3]);
console.log(demoSet);

demoSet.forEach((item, item2) => {
  console.log(item);
  // console.log(`${item},${item2}`);
});

// forEach With Map

const demoMap = new Map([
  ["A", "sadam"],
  ["B", 2],
  ["x", { nam: "adam", age: 23, gender: "male" }],
]);

// console.log(demoMap);

demoMap.forEach((value, key) => {
  console.log(`${key} ==>${value}`);
});
