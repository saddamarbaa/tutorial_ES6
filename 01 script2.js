/**
 * Let & Const
 */

function letVarExample() {
  if (true) {
    var firstName = "Saddam"; // exists in function scope, defined in function scope

    let lastName = "Arbaa"; // exists in block scope, defined in block scope
  }

  console.log("Function Scope Access: ", firstName);
  // console.log("Function Scope Access: ", lastName); //ReferenceError: lastName is not defined
}

letVarExample();

const anotherExample = [1, 2, 3];
anotherExample.push(4);
anotherExample[2] = 21;
console.log(anotherExample);

// anotherExample = [21, 3]; // TypeError: Assignment to constant variable.

console.log(anotherExample);

/**
 * ES6+ Template Literals
 */

let firstName = "Sadam";
let middleName = "Adam";
let lastName = "Yahia";
let fullName = `${firstName}  ${middleName}  ${lastName} welcome`;

console.log(fullName);

let searchResults = 50;

// let output = `${searchResults > 0 ? searchResults + " results" : "No search results"}`;

let output = `${
  searchResults > 0 ? `${searchResults} results` : "No search results"
}`;

console.log(output);

/**
 * Arrow Functions
 */

getFullName = () => {
  let firstName = "Saddam";
  let lastName = "Arbaa";
  return `${firstName} ${lastName} test`;
};

let outputResult = getFullName();
console.log(outputResult);

// update variable values
firstName = "Saddam";
lastName = "Arbaa";

getFullNameShorter = (firstName, lastName) =>
  console.log(`${firstName} ${lastName}`);

console.log("Shorted Example");
getFullNameShorter(firstName, lastName);

/**
 * Default Parameters
 */

sortBy = (sortType = "Name", users) => {
  console.log("Sorting By: ", sortType);
};

sortBy(); // OutPut Sorting By:  Name
sortBy("Date", []); // OutPut Sorting By:  Date

/**
 * Iterating
 */

let fruits = ["apple", "banana", "orange", "cherries", "jackfruit", "guava"];
console.log("For Loop:");
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

console.log("For-Of:");
for (let fruit of fruits) {
  console.log(fruit);
}

for (const fruit of fruits) {
  console.log(fruit);
}

console.log("# # # #");

console.log("forEach :");
fruits.forEach((fruit) => {
  console.log(fruit);
});

// console.log("Map:");
// const newFruits = fruits.map((fruit) => {
//   console.log(fruit);
//   return fruit;
// });

// console.log("Map:");
// const newFruits = fruits.map((fruit) => {
//   console.log(fruit);
//   return `${fruit}  Modified`;
// });

console.log("Map:");
const newFruits = fruits
  .map((fruit) => {
    console.log(fruit);
    return fruit;
  })
  .filter((value) => {
    if (value === "banana") {
      return false;
    } else {
      return true;
    }
  });

console.log(newFruits);

/**
 * Destructuring Object
 */

// Array destructuring

const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// Object destructuring

const user = {
  id: 2,
  is_verified: true,
};

const { id, is_verified } = user;

console.log(id); // 2
console.log(is_verified); // true

let full_Name = {
  first_Name: "Saddam",
  last_Name: "Arbaa",
};

let { first_Name, last_Name } = full_Name;

console.log(first_Name);
console.log(last_Name);

let Student = [
  {
    firstStudent: "Saddam",
    secondStudent: "Arbaa",
  },
  (Student) => {
    console.log("I set the Student: ", Student);
  },
];

let [newStudent, seStudent] = Student;
console.log(newStudent);

seStudent({ firstStudent: "adam", secondStudent: "amman" });

/*
   JavaScript Callbacks
*/

let logCall = function () {
  console.log("locCall was called back");
};

// call after 3 second

setTimeout(logCall, 3000);

// call after 5 second
//  call back
setTimeout(function () {
  console.log("the function was called");
}, 3000);

// call after 6 second
//  call back

setTimeout(() => {
  console.log("the function was called");
}, 3000);
