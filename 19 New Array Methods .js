/*
  New Array Methods Part1
  Array.of
  Array.from
  Array.fill
*/

// Array.of(Elements To Create The Array)

let oldArray = Array(100);
console.log(oldArray); // output [empty × 100]
console.log(oldArray.length); // out [100]

let newArray1 = Array.of(100);
console.log(newArray1); // out [100]
console.log(newArray1.length); // out 1

// Array.from(Iterable, Mapfn, This)

let herName = "Jenny";
let arrayOfLetters = Array.from(herName);

console.log(herName);
console.log(arrayOfLetters);

let normalNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
let numbersMinusTen = Array.from(normalNumbers, (numbers) => numbers - 10);
console.log(normalNumbers);
console.log(numbersMinusTen);

// Array.fill
// Array.fill(Value To Fill, Start Default 0, End Default Array.length)

let themNumbers = [1, 10, 30, 70, 90];

// themNumbers.fill(100); // All will be 100
// themNumbers.fill(100, 2); // from 30 until end
themNumbers.fill(100, 1, 3); // from 10 30

console.log(themNumbers);

/*
  New Array Methods Part2
  Array.find()
  Array.findIndex()
  Array.copyWithin()
*/

// Array.find() Not Returning All Values
// find me number bigger than 10

let found = themNumbers.find((ele) => ele > 10);
console.log(found);

console.log(`${"#".repeat(40)}`);

// Array.findIndex() Not Returning All Values

// find index of first element bigger than 10
let found2 = themNumbers.findIndex((ele) => ele > 10);
console.log(found2);

// Array.copyWhitin
// Array.copyWithin(Target, Start Default 0, End Default Array.length)

let lettures = ["A", "B", "C", "D", "E", "F", "G"];
lettures.copyWithin(0);
lettures.copyWithin(0, 2, 5);
lettures.copyWithin(0, 4);
console.log(lettures);
