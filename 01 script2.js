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
