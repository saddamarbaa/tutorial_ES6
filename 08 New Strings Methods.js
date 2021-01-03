/*
  New String Methods
  startsWith => string.startsWith(Search String, Position = 0)
  endsWith => string.endsWith(Search String, End Position = string.length)
  ---
  includes => string.includes(Search String, Position = 0)
  repeat => string.repeat(count)
*/

let hisName = "Ali Adam Mohhhmed ";

console.log(hisName.startsWith("a"));
console.log(hisName.startsWith("A"));
console.log(hisName.startsWith("a", 3));
console.log(hisName.startsWith("A", 10));

console.log(hisName.endsWith("h"));
console.log(hisName.endsWith("d", hisName.length));
console.log(hisName.endsWith("Mohhhmed", hisName.length - 1));
console.log(hisName.endsWith("i", 3));

console.log(hisName.includes("h"));
console.log(hisName.includes("p"));
console.log(hisName.includes("A", 5));
console.log(hisName.includes("A", 4));

console.log("ok ".repeat(5));
// console.log(hisName.repeat(12));
