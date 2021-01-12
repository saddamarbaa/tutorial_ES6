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
