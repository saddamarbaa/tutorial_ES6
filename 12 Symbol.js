/*
  Symbols
*/

// Symbol
// The data type symbol is a primitive data type

const mySymbol = Symbol();

console.log(typeof mySymbol); // Symbol Data Type

const mySymbolOne = Symbol();
const mySymbolTwo = Symbol();

console.log(mySymbolOne === mySymbolTwo); // Unique

const myNewSymbol = Symbol();

const myObject = {
  username: "Ali Adam",
  website: "Ali.org",
  [myNewSymbol]: "This Is Hidden From Iteration",
};

console.log(myObject);

for (let val of Object.entries(myObject)) {
  console.log(val);
}

console.log(Object.getOwnPropertyNames(myObject));

console.log(Object.keys(myObject));

console.log(Object.getOwnPropertySymbols(myObject));

console.log(JSON.stringify(myObject));
