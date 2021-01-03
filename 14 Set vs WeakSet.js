/*
 Set vs WeakSet And Garbage Collection
		Set vs WeakSet
		
  ======================

  Set
  - Contain Any Type Of Values
  - Get Elements Count With .size
  - forEach Available To Iterate
  - You can Get Its Keys

  WeakSet
  - Contains Only Object
  - You Can't Use Size To Get Elements Count
  - forEach Not Available To Iterate
  - You Cant Get Keys
*/

// Normall set

// let mainObject = { A: 1 };

// const testingSet = new Set([mainObject]);

// let firstObject = { B: 2 };
// let secondObject = { C: 3 };

// testingSet.add(firstObject);
// testingSet.add(secondObject);
// console.log(testingSet);
// console.log(testingSet.size);
// testingSet.delete(firstObject);
// console.log(testingSet.size);
// console.log(testingSet.has(firstObject));
// firstObject = null;
// console.log(testingSet);

// testingSet.forEach((element) => {
//   console.log(element);
// });

// WeakSet

let mainObject = { A: 1 };

const testingSet = new WeakSet([mainObject]);

let firstObject = { B: 2 };
let secondObject = { C: 3 };

console.log(testingSet);
testingSet.add(firstObject);
testingSet.add(secondObject);

console.log(testingSet.has(firstObject));
console.log(testingSet.has(secondObject));

testingSet.delete(firstObject);
console.log(testingSet.has(firstObject));
console.log(testingSet);

firstObject = null;
console.log(testingSet.has(firstObject));
// testingSet.add(12);
console.log(testingSet);

// testingSet.forEach((element) => {
//   console.log(element);
// });
