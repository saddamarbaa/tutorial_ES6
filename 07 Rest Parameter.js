/*
  Rest Parameters ...
*/

// First Example

function demoTest(param1, param2, param3, ...myParam) {
  console.log("param1 : ", param1);
  console.log("param2 : ", param2);
  console.log("param3 : ", param3);
  console.log("Rest of Parameter : ", myParam);
}

demoTest("A", "B", "C", "ABCDEF");

// ###########################

// Second Example

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
