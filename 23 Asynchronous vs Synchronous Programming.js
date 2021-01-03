/*
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

console.log("Function To Do Something");
window.setTimeout(() => console.log("Get Friend List", 1000));
window.setTimeout(() => console.log("Get lates feed back", 2000));
console.log("Do Important Things,Waiting is A big Problem");
