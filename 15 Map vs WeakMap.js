/*
  Map vs WeakMap
  ======================

  Map
  - Contain Any Type Of Values
  - Get Elements Count With .size
  - forEach Available To Iterate
  - You can Get Its Keys

  WeakMap
  - Contains Only Object
  - You Can't Use Size To Get Elements Count
  - forEach Not Available To Iterate
  - You Cant Get Keys
*/

// Map vs WeakMap
// Map

// const mainTestingMap = new Map();
// let thirdObject = { D: 3 };
// let fourthObject = { E: 4 };
// console.log(mainTestingMap);

// mainTestingMap.set(thirdObject, "test1");
// mainTestingMap.set(fourthObject, "test2");
// console.log(mainTestingMap);

// mainTestingMap.set(2, 23);
// mainTestingMap.set("k", 234);
// console.log(mainTestingMap);

// console.log(mainTestingMap.get(thirdObject));
// console.log(mainTestingMap.get("k"));

// console.log(mainTestingMap.has(thirdObject));
// mainTestingMap.delete(thirdObject);
// console.log(mainTestingMap.has(thirdObject));

// thirdObject = null;
// console.log(mainTestingMap.get(thirdObject));
// console.log(mainTestingMap.size);

// WeakMap

const mainTestingMap = new WeakMap();
let thirdObject = { D: 3 };
let fourthObject = { E: 4 };

console.log(mainTestingMap);

mainTestingMap.set(thirdObject, "test1");
mainTestingMap.set(fourthObject, "test2");
console.log(mainTestingMap);

// mainTestingMap.set(2, 23);
// mainTestingMap.set("k", 234);
// console.log(mainTestingMap);

console.log(mainTestingMap.get(thirdObject));

console.log(mainTestingMap.has(thirdObject));
mainTestingMap.delete(thirdObject);
console.log(mainTestingMap.has(thirdObject));

thirdObject = null;
console.log(mainTestingMap.get(thirdObject));
