/*
			[ Introduction ES6]
			
   ES6, ES7, ES8
			[E]CMAS [c] ript 6  / ECMAScript 2015 - ES6

*/

/* 
			[New Features in ES6]
			
    The let keyword
    The const keyword
    JavaScript Arrow Functions
    JavaScript Class
    JavaScript Promise
    JavaScript Symbol
    Default Parameter Values
    Function Rest Parameter
    Array.find()
    Array.findIndex()
    New Number Properties
    New Number Methods
    New Global Methods

			[var]
			- Function Sope
			- can Be ReDeclare
			- Undefined When Accessing Variable Before its Declared
			- Does Not Create Properties in the Windows Object

			[The let keyword]
			- Block Sope
			- cannot Be ReDeclare
			- ReferenceEror When Accessing Variable Before its Declared
			- Does Not Create Properties in the Windows Object

			[The const keyword]
			- Block Sope
			- cannot Be ReDeclare
			- ReferenceEror When Accessing Variable Before its Declared
			- Does Not Create Properties in the Windows Object
*/

const PI = 3.14;
const name = "Saddam";
console.log(PI);
console.log(name);

/*
			[Arrow Function - Syntax and Examples]
			[Arrow functions allows a short syntax for writing function expressions]
			[You don't need the function keyword, the return keyword, and the curly brackets]
			[Syntax]
			[param => expression]
			[(param1, paramN) => expression]
			param => {
  let a = 1;
  return a + param;
}
*/

// [Comparing traditional functions to arrow functions]

// Regular Function
function test(param) {
  return param + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(param) => {
  return param + 100;
};

// 2. Remove the body brackets and word "return" -- the return is implied.
(param) => param + 100;

// 3. Remove the argument parentheses
// param => param + 100;
(param) => param + 100;

// Regular function with No Paramters
let regularTestOne = function () {
  return 7;
};

// arrow with No Paramters
let arrawtestOne = () => 8;
// let arrawTestTwo = _ => 14;
let arrawTestTwo = (_) => 14;

console.log(regularTestOne());

console.log(arrawtestOne());
console.log(arrawTestTwo());

// Regular function with one Paramters
let regularTestTwo = function (param1) {
  return param1 * 7;
};

// arrow function with one Paramters
let arrawTestThree = (param1) => param1 * 7;

console.log(regularTestTwo(5));
console.log(arrawTestThree(5));

// Regular function with Multiple Paramters
let regularTesThree = function (param1, param2) {
  return param1 * param2;
};

// arrow function with Multiple Paramters
let arrawTestFour = (param1, param2) => param1 * param2;

console.log(regularTesThree(5, 5));
console.log(arrawTestFour(10, 5));

/*
			[lArrow function and this keyword in javascript]
	*/

// [Template Literals]

let fullName = "Jhon Do";

function makeUpperCase(word) {
  return word.toUpperCase();
}

let template = `<h1> ${makeUpperCase("Hello")}  ${fullName}</h1> 
		<p>this is template literals from javascript</p>
		<h4>thanks for comming </h4>`;

document.getElementById("template").innerHTML = template;

// [Spread Operator]

let array1 = [1, 2, 3, 4];

let array2 = [5, 6, 7, 8];
let allArray = [...array1, ...array2];
console.log(array1); /* output:[1, 2, 3, 4] */
console.log(array2); /* output: [5, 6, 7, 8] */
console.log(allArray); /* output:[1,2,3,4,5,6,7,8] */

const numbers = [20, 30, 40];

function sumNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}
// console.log(sumNumbers(numbers));
console.log(numbers); /* output:[20, 30, 40]*/
console.log(...numbers); /* output:20 30 40 */
console.log(sumNumbers(...numbers));

let customArray = [1, 2, 3, 4, ...array2, ...array1];
// output: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]
console.log(customArray);

// [Default Parameters]

function greeting($greeting = "Hello World") {
  console.log($greeting);
}
greeting(); /* output: Hello World  */
greeting("sadam"); /* output: sadam */
