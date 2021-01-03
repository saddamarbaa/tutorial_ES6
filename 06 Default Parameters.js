/*
  Default Parameters
*/

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
