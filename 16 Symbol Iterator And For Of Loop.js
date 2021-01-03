/*

  Symbol Iterator & For Loop

  Iterable => Object Has Symbol.Iterator
  Iterator
    - Object With Interface Designed For Iteration
    - All Iterators Has Next() Method That Return Result Object
    - The Result Object Has Two Props
    --- [1] Value => The Next Value
    --- [2] Done => Boolean Value To Tell If The Next Value Exists Or No

  For ... Of Loop

  [1] Call Symbol.Iterator With Next Method
  [2] Save Value Inside Variable
  [3] Check For Done If Its True => Exit The Loop

*/

let testName = "sadam";
let testNumber = 1223;
let testArray = [1, 2, 3, 4, 5];
let testObject = {};

console.log(typeof testName[Symbol.iterator]); // out : function
console.log(typeof testArray[Symbol.iterator]); // out : function
console.log(typeof testNumber[Symbol.iterator]); // out : undefind
console.log(typeof testObject[Symbol.iterator]); // out :  undefind

let TheIterator = testArray[Symbol.iterator]();
console.log(TheIterator);
console.log(TheIterator.next());
console.log(TheIterator.next());
console.log(TheIterator.next());
console.log(TheIterator.next());
console.log(TheIterator.next());
console.log(TheIterator.next());

let TheStringIterator = testName[Symbol.iterator]();
console.log(TheStringIterator.next());
console.log(TheStringIterator.next());
console.log(TheStringIterator.next());
console.log(TheStringIterator.next());
console.log(TheStringIterator.next());
console.log(TheStringIterator.next());

// console.log(typeof testNumber[Symbol.iterator]());
// console.log(typeof testObject[Symbol.iterator]())

for (const char of testName) {
  console.log(char);
}

// TypeError: testNumber is not iterable
// for (const num of testNumber) {
//   console.log(num);
// }

for (const iterator of testArray) {
  console.log(iterator);
}
