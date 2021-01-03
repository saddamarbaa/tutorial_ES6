/* 
 Set vs Array
  Set: new Set(Iterable)
*/

let mySet = new Set([1, 2, 1, 1, 1, 3, 3, 3, 4, 3, 4]);
let myArray = [1, 2, 1, 1, 1, 1, 3, 4];

console.log(typeof mySet); /* object*/
console.log(myArray); /* output: [1, 2, 1, 1, 1, 1, 3, 4] */
console.log(mySet); /* output:{1, 2, 3, 4} */

//convert an array to set
let newSet = new Set(myArray);
// convert  set to an array
let newArray = [...mySet];
console.log(newSet);

/*
  Set: Methods
*/

let myBook = new Set("saddam");
myBook.add("saddamm");
console.log(myBook);

myBook.delete("saddamm");
console.log(myBook);
console.log(myBook);
console.log(myBook.has("s"));
console.log(myBook.has("s".toLocaleLowerCase));
console.log(myBook.has("xr"));

myBook.clear();
console.log(myBook);
