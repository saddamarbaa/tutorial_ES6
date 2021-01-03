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
