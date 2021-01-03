/*
   [Introduction ES6]
			
   ES6, ES7, ES8
   [E]CMAS [c] ript 6  / ECMAScript 2015 - ES6

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

//[lArrow function and this keyword in javascript]

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

function showMyInfo(userName = "saddam", role = "Admin", them = "black") {
  return `Hello ${userName}, Your Role Is ${role}, Wbside Them Is ${them}`;
}

console.log(showMyInfo("Saddam", "IT", "Them"));
console.log(showMyInfo());
console.log(showMyInfo("Saddam", "Them"));

// [Rest Parameter]

function demoTest(param1, param2, param3, ...myParam) {
  console.log("param1 : ", param1);
  console.log("param2 : ", param2);
  console.log("param3 : ", param3);
  console.log("Rest of Parameter : ", myParam);
}

demoTest("A", "B", "C", "ABCDEF");

function addAllParams(...myParams) {
  let myNumber = 0;
  for (const param of myParams) {
    myNumber += param;
  }
  return myNumber;
}

console.log(addAllParams(1)); /* Output: 1 */
console.log(addAllParams(1, 2, 3, 4)); /* Output: 10 */
console.log(addAllParams(5, 5, 5, 5, 5)); /* Output: 25 */

// [New String Methods - startsWith, endsWith]
//startsWith => string.startsWith(search string,position = 0)
//endsWith => string.endsWith(search string, end position =string.length)

let hisName = "Ali Adam Mohhhmed ";

console.log(hisName.startsWith("a"));
console.log(hisName.startsWith("A"));
console.log(hisName.startsWith("a", 3));
console.log(hisName.startsWith("A", 10));
console.log(hisName.endsWith("h"));
console.log(hisName.endsWith("d", hisName.length));
console.log(hisName.endsWith("Mohhhmed", hisName.length - 1));
console.log(hisName.endsWith("i", 3));

// [ New String Methods - Includes, Repeat]
// includes => string.includes(search string,position = 0)
// repeat => string.repeat(count)

console.log(hisName.includes("h"));
console.log(hisName.includes("p"));
console.log(hisName.includes("A", 5));
console.log(hisName.includes("A", 4));
console.log("ok ".repeat(5));
// console.log(hisName.repeat(12));

// Destructuring Object Part 1
// The basic syntax of object destructuring is pretty simple:
// const { identifier } = expression;

const user = {
  MyName: "saddam",
  age: 30,
  gender: "male",
  country: "sudan",
  curentCountry: "indonesia",
  them: "yellow",
  languges: {
    html: "77%",
    css: "89%",
    js: "44%",
  },
};

// Extracting a property
const { MyName, age, gender, them = "blue" } = user;

console.log(
  `My Name Is : ${MyName}, Iam ${age} Years Old and Iam ${gender} my them is ${them}`
);

const hero = {
  fname: "Ali",
  realName: "Adam Ali",
};

// Extracting a property
const { fname, realName } = hero;
fname; // => 'Ali',
realName; // => 'Adam Ali'

console.log(fname); /* output Ali */
console.log(realName); /* output Adam Ali */

// Aliases
// const { identifier: aliasIdentifier } = expression;
const {
  MyName: theName,
  age: theAge,
  gender: theGender,
  them: theThem = "blue",
} = user;

console.log(
  `My Name Is : ${theName}, Iam ${theAge} Years Old and Iam ${theGender} my them is ${theThem}`
);

// Extracting properties from nested objects
// const { nestedObjectProp: { identifier } } = expression;

const {
  MyName: theName1,
  age: theAge1,
  gender: theGender1,
  them: theThem1 = "blue",
  languges: { html, css },
} = user;

console.log(
  `My Name Is : ${theName1}, Iam ${theAge1} Years Old and Iam ${theGender1} my them is ${theThem1} languges I know are  html ${html} and css ${css} `
);

const { html: HTML, css: CSS, js: JS } = user.languges;

console.log(`${HTML}, ${CSS}, ${JS}`);

// Destructuring Array Part 1

const food = ["Burger", "Pizza", "chicken", "meat", "orange", "Rice"];

// const [one, two, three, four, five = "defult"] = food;

const [one, , three] = food;

// console.log(
//   `the foods I love Most are ${one}, ${two} ${three} ${four}  ${five}`
// );

console.log(`the foods I love Most are ${one} , ${three} `);

// Destructuring Array Part 2

const food2 = ["Burger", "Pizza", "chicken", ["Apple", "Banana", "Mango"]];

// const [firstFood, secondFood, thirdFood, [f1, f2, f3]] = food2;

// console.log(
//   `the foods I love Most are ${firstFood} , ${secondFood}, ${thirdFood}, ${f1} `
// );

// const [firstFood, ...otherfood] = food2;

const [firstFood, secondFood, , [f1, , f3, f5 = "Defult"]] = food2;

console.log(
  `the foods I love Most are ${firstFood} , ${secondFood}, ${(f1, f3, f5)} `
);

// Destructuring Array - Swap Variables

let book = "vedio";
let vedio = "book";
// swap
[vedio, book] = [book, vedio];
console.log("Book is :", book);
console.log("vedio is :", vedio);

//  Destructuring Mixed Content

const student = {
  studentName: "Adam",
  StudentAge: 23,
  StudentSkills: {
    SHTML: "80%",
    Scss: "76%",
    Sjs: ["React Js", "VueJs", "AngularJs"],
  },
};

// const {
//   studentName,
//   StudentAge,
//   StudentSkills: {
//     SHTML,
//     Scss,
//     Sjs: [A, B, C],
//   },
// } = student;

// console.log(`my Name is ${studentName} , and am ${StudentAge}`);
// console.log(`my html skills is ${SHTML} and my css skills ${Scss}`);
// console.log(`I have Knowlede framework like ${A} and my css skills ${B}`);

// Destructuring Function Parameters

function showStudentInfo({
  studentName,
  StudentAge,
  StudentSkills: {
    SHTML,
    Scss,
    Sjs: [A, B, C],
  },
}) {
  console.log(`my Name is ${studentName} , and am ${StudentAge}`);
  console.log(`my html skills is ${SHTML} and my css skills ${Scss}`);
  console.log(`I have Knowlede framework like ${A} and my css skills ${B}`);
}

showStudentInfo(student);

/*  Set vs Array
    set: new Set(Iterable)
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

// Set Methods

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

// Symbol
// The data type symbol is a primitive data type
// const mySymbol = Symbol();

console.log(typeof mySymbol); /* symbol */

const mySymbolOne = Symbol();
const mySymbolTwo = Symbol();

console.log(mySymbolOne === mySymbolTwo); // script.js:451 false

//  forEach

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
console.log(demoTest);

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

// Set vs WeakSet And Garbage Collection

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

/*
Symbol Iterator And For Of Loop
Iterable => Object Has Symbol.Iterator
Iterator
- Object With Interface Designed For Iteration
- All Iterators Has Next Method That Return Result Object
- The Result Object Has Two Props
-- [1] Value => The Next Value
-- [2] Done => Boolean Value To tell If The Next Value Exists or No

For  ... Of Loop 

[1] Call Symbol.Iterator With Next Method
[2] Save Value Inside variable
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

// Custom Iterable Object

// let create custom iterable object

const doctors = {
  name: "Ali",
  age: 36,
  hospital: "batam",
  //  let create custom iterable object

  [Symbol.iterator]() {
    let counter = 0;
    let properties = Object.keys(this);
    // console.log(properties);
    return {
      next() {
        return {
          // value: properties[counter],
          value: doctors[properties[counter]],
          done: counter++ === properties.length,
        };
      },
    };
  },
};

for (let doctor of doctors) {
  console.log(doctor);
}

/*   
Generators Part 1 
Intro And Whats Generators
*/

function* GenerateTickets() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let iterator = GenerateTickets();

console.log(iterator);
console.log(iterator.next());

console.log(iterator.next().value);
console.log(iterator.next().done);

console.log(`${"#".repeat(10)}`);
console.log("Atfer new cusomer come now let ask for new ticket");
console.log(iterator.next().value);
console.log(iterator.next().done);

console.log(`${"#".repeat(10)}`);
console.log("agin Atfer new cusomer come now let ask for new ticket");
console.log(iterator.next().value);
console.log(iterator.next().done);

console.log(`${"#".repeat(10)}`);

let arrayForTest = [10, 20, 30, 40, 50, 60, 70];

function* GenerateNumbers(numbers) {
  // loop through Yield
  // yield* [1, 2, 3, 4];

  for (let number = 0; number < numbers.length; number++) {
    yield numbers[number];
  }
}

let getNumber = GenerateNumbers(arrayForTest);
console.log(getNumber);
console.log(typeof getNumber);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
// console.log(getNumber.next().value);
console.log(getNumber.next());
console.log(`${"#".repeat(10)}`);

// Generators Part 2 Functionality And Return

// function orderBook() {
//   window.alert("You Clicked On Button To Order Book");
//   console.log("You Clicked On Button To Order Book");

//   window.alert("You added new Book to the list");
//   console.log("You added new Book to the list");

//   window.alert("Payment is done");
//   console.log("Payment is done");
// }

// let orderNow = orderBook();

// function* orderBook() {
//   window.alert("You Clicked On Button To Order Book");
//   console.log("You Clicked On Button To Order Book");

//   window.alert("You added new Book to the list");
//   console.log("You added new Book to the list");

//   window.alert("Payment is done");
//   console.log("Payment is done");
// }

// let orderNow = orderBook();
// console.log(orderNow);
// console.log(orderNow.next().value);

function* mySkills() {
  yield "Html";
  yield "css";
  yield "javascript";
  yield "python";
  yield "c++";
}

// loop on Iterators

let skills = mySkills();
for (let skill of skills) {
  console.log(skill);
}

// loop on Genrators

for (let skill of mySkills()) {
  console.log(skill);
}

// Generators Part 3 Delegating Generators

function* GenerateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* GenerateNames() {
  yield "Saddam";
  yield "Arbaa";
  yield "Adam";
}

function* generateAll() {
  yield* GenerateNums();
  yield* GenerateNames();
}

let generate_all = generateAll();

// will finished yeild all the element in first function then continue to next one

console.log(`${"#".repeat(10)}`);
console.log(generate_all.next());
console.log(generate_all.next());
console.log(generate_all.next());
console.log(generate_all.next());
console.log(generate_all.next());
console.log(generate_all.next());
// console.log(generate_all.next()); /* undifned */

/*
New Array Methods Part 1
Array.of
Array.from
Array.fill
*/

//Array.of

let oldArray = Array(100);
console.log(oldArray); // output [empty × 100]
console.log(oldArray.length); // out [100]

let newArray1 = Array.of(100);
console.log(newArray1); // out [100]
console.log(newArray1.length); // out 1

// Array.from

let herName = "Jenny";
let arrayOfLetters = Array.from(herName);

console.log(herName);
console.log(arrayOfLetters);

let normalNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
let numbersMinusTen = Array.from(normalNumbers, (numbers) => numbers - 10);
console.log(normalNumbers);
console.log(numbersMinusTen);

// Array.fill
// Array.fill (value to fill, Start Defult 0, End Default Array.length)

let themNumbers = [1, 10, 30, 70, 90];

// themNumbers.fill(100); // All will be 100
// themNumbers.fill(100, 2); // from 30 until end
themNumbers.fill(100, 1, 3); // from 10 30

console.log(themNumbers);

/* New Array Methods Part 2
Array.find()
Array.findIdex()
Array.copyWithin
*/

// Array.find
// find me number bigger than 10
let found = themNumbers.find((ele) => ele > 10);
console.log(found);

console.log(`${"#".repeat(40)}`);

// Array.findIndex

// find index of first element bigger than 10
let found2 = themNumbers.findIndex((ele) => ele > 10);
console.log(found2);

// Array.copyWhitin
// Array.copyWhtin(Target, Start Default 0, End Defult Array.length)

let lettures = ["A", "B", "C", "D", "E", "F", "G"];
lettures.copyWithin(0);
lettures.copyWithin(0, 2, 5);
lettures.copyWithin(0, 4);
console.log(lettures);

/*
OOP  ==> Class Part
Old and New Class Syntax
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`Hello ${this.name} Your Age is ${this.age}`);
  }
  getDays() {
    console.log(`Your in Days ${this.age} Days`);
  }
}

// user constructor
console.log(User.prototype);

const firstUser = new User("Sadam", 24);
firstUser.getDays(); // Your in Days 24 Days
firstUser.getInfo(); // Hello Sadam Your Age is 24

class Student {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  // Statics method
  static countStudent() {
    console.log("we have 50 Student in this school");
  }

  register() {
    console.log(`Hello ${this.name} You are now registred in school`);
  }
}

let std1 = new Student("Ali", 26, 12);
let std2 = new Student("John", 22, 1);

std1.register();
// std1.countStudent();
std2.register();
Student.countStudent();

// inherited Student class
class studentMemember extends Student {
  constructor(name, age, id, gpa) {
    super(name, age, id);
    this.gpa = gpa;
  }
  getGpa() {
    console.log(`Your gpa is ${this.gpa}`);
  }
}

let stud3 = new studentMemember("Jhon Joe", 19, 21, 3.4);
stud3.getGpa();
stud3.register();

/* 
 Call Stack, Web API, Event Loop, Callback Queue
  Important Knowledge
  For Promises
  - Call Stack
  --- Mechanism To Make Interpreter Track Your Calls
  --- When You Call A Function Its Added To The Stack
  --- When Function Executed Its Removed From The Stack
  --- The Interpreter Continue Calling From The Last Point Reached
  --- Call Stack Detect Web API And Leave It To The Browser To Handle It
  - Web API
  --- Methods Available From Environment => Browser
  --- When Complete It Add The Callback To The Callback Queue
  - Event Loop
  --- Wait The Call Stack To Finish
  --- Get Callback From Callback Queue
  --- Add Callback To Call Stack
  - Callback Queue
  =============================================
  Asynchronous Vs Synchronous Programming
*/

window.setTimeout(() => console.log("last excuit"), 10);
console.log("first");
window.setTimeout(() => console.log("second"), 0);
console.log("thrid");

// this will excuit at last
window.setTimeout(() => console.log(numberForTest), 0);
let numberForTest = 12; // excuit first
numberForTest += 1; // excuit second

// Asynchronous vs Synchronous Programming

console.log("Function To Do Something");
window.setTimeout(() => console.log("Get Friend List", 1000));
window.setTimeout(() => console.log("Get lates feed back", 2000));
console.log("Do Important Things,Waiting is A big Problem");

/*
  Promise Intro
  - Promise Is One Of The Best Features In ES6
  - Promise Make It Easy To Support Asynchronous Programming
  - Promise in JavaScript Is Like Promise in Real Life
  - Promise Is Something That Will Happen in The Future
  - Promise Is A Placeholder For A Future Value
  - You Booked A Cinema Ticket, You Have A Promise From Cinema Owner 2 Have A Seat
  - You Got Task To Do, U Promised Your Boss To Do The Task
  - You Ordered Food From Restaurant
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The Food You Will Receive
  - You Ordered iPhone From Souq Shop
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The iPhone You Will Receive
  - Promise Is An Object
  - Promise Is The Event Completion Or Failure of Async Operation & Its Resulting Value.
  - JavaScript Use Callbacks For Asynchronous Programming
  --- [1] Function Called And Do The Task
  --- [2] Action Complete
  --- [3] Another Function Called
  --- [4] Action Complete
  --- [5] Another Function Called
  - In Complex Cases => Every Call Add Nesting Level
  - http://callbackhell.com/
  - Promise Avoiding Callback Hell Or Pyramid Of Doom
  - Promise Is One Of This States
  [1] Pending => Not Fulfilled Or Rejected
  [2] Fulfilled => Operation Succeeded
  [3] Rejected => Operation Failed
*/

const myPromise = new Promise((resolve, reject) => {
  // console.log("Welcome To My First Promise");
  /*
Asynchronous Operation
Fulfilled => resolve
Rejected => reject
*/

  // let connect = false;
  let connect = true;
  if (connect) {
    resolve("Connection Established");
  } else {
    reject(Error("Connection Failed"));
  }
}).then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);

console.log(typeof myPromise);

// Another Syntax

const theResolved = (resolved) => console.log(resolved);
const therejected = (rejected) => console.log(rejected);

myPromise.then(theResolved, therejected);

// Then And Catch And Training

const demoPromise = new Promise((resolve, reject) => {
  // only one State Allowed
  // resolve("resolved");
  // reject("Rjected"); // Igonored

  if (Math.random() * 100 < 87) {
    resolve("Good Luck");
  } else {
    reject("Bad Luck");
  }
});

// demoPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// );

// demoPromise.then((resolved) => console.log(resolved));
// demoPromise.catch((rejected) => console.log(rejected));

demoPromise.then((resolved) => console.log(resolved));
demoPromise.catch((rejected) => console.log(rejected));

/*
Promise – And XMLHTTPRequest  
git information from my github
*/
// Without Promise

function getFirstRepo(apiURL) {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      /*
	Ready State => The Status Of The Request
	[0] Request Not Initialized
	[1] Server Connection Established
	[2] Request Recieved
	[3] Processing Request
	[4] Request Is Finished And Response Is Ready
	Status => Response Status Code
	[200] Ok
	[404] Not Found
      */

      // console.log(this.responseText);
      console.log(JSON.parse(this.responseText)[0].name); // my firs repo name
    }
  };

  // XMLHttpRequest.open(Method, URL, Async, User, Pass)
  myRequest.open("GET", apiURL, true);

  // Send The Request
  myRequest.send();
}

// call the function and pass my github URL as argument
getFirstRepo("https://api.github.com/users/saddamarbaa/repos");

// With Promise

const getSecondRepo = (apiURL) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText)[1].name);
      } else {
        reject(Error(this.statusText));
      }
    };
    myRequest.open("GET", apiURL, true);
    myRequest.send();
  });
};

// getSecondRepo("https://api.github.com/users/saddamarbaa/repos").then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// );

getSecondRepo("https://api.github.com/users/saddamarbaa/repos").then(
  (result) => {
    let div = document.createElement("div");
    // the repo which been returned
    let text = document.createTextNode(result);
    div.appendChild(text);
    document.body.appendChild(div);
  }
),
  (error) => console.error();

// Promise – Ignoring The Pyramid Of Doom

// const myPromise = new Promise((resolve, reject) => {
//   let thePosts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//   resolve(thePosts);
// });

// myPromise
//   .then((result) => {
//     console.log(`Total Number Of Posts Is ${result.length} Posts`);
//     return result;
//   })
//   .then((result) => {
//     console.log("#".repeat(15));
//     console.log(`The First Post Is ${result[0]}`);
//     return result;
//   })
//   .then((result) => {
//     console.log("#".repeat(15));
//     console.log(`The Last Post Is ${result[result.length - 1]}`);
//     return result;
//   })
//   .then((result) => {
//     console.log("#".repeat(15));
//     console.log(`Every Page Has 2 Posts`);
//     console.log(`Application Has ${result.length / 2} Pages`);
//   });

// Promise – Fetch And Training’s

fetch("https://api.github.com/users/saddamarbaa/repos")
  .then((result) => {
    let allRepos = result.json();
    console.log(allRepos);
    return allRepos;
  })
  .then((repos) => {
    console.log(`Total Number Of Repos Is ${repos.length}`);
    return repos;
  })
  .then((repos) => {
    console.log(`First Repo Is ${repos[0].name}`);
    return repos;
  })
  .then((repos) => {
    console.log(`Last Repo Is ${repos[repos.length - 1].name}`);
    return repos;
  })
  .then((repos) => {
    for (let i = 0; i < repos.length; i++) {
      let newElement = document.createElement("div");
      let elementText = document.createTextNode(repos[i].name);
      newElement.appendChild(elementText);
      document.body.appendChild(newElement);
    }
  });

// Promise All

// const myFirstPromise = new Promise((resolve, reject) => {
//   let connect = true;
//   if (connect) {
//     resolve("First Promise Resolved");
//   } else {
//     reject("First Promise Rejected");
//   }
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//   let settings = true;
//   if (settings) {
//     resolve("Second Promise Resolved");
//   } else {
//     reject("Second Promise Rejected");
//   }
// });

// Promise.all([myFirstPromise, mySecondPromise]).then((result) => {
//   console.log(result);
// });

// Promise Race

const myFirstPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("First Promise Resolved");
  }, 50);
});

const mySecondPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("Second Promise Resolved");
  }, 100);
});

// myFirstPromise.then((result) => console.log(result));
// mySecondPromise.then((result) => console.log(result));

Promise.race([myFirstPromise, mySecondPromise]).then((result) => {
  console.log(result);
});
