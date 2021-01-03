// 📁 main.js
// Modules - Part 2 Import All And Aliases

// import { userAge, months, myNumber, sayHello } from "./app.js";

// console.log(sayHello("saddam"));
// console.log(months);
// console.log(myNumber);
// console.log(userAge);

// for (let month = 0; month < months.length; month++) {
//   console.log(months[month]);
// }

// Modules - Part 2 Import All And Aliases

import defultExport, * as myAllias from "./app.js";

console.log(myAllias.months);
console.log(myAllias.myNumber);
console.log(myAllias.userAge);
console.log(myAllias.sayHello("Ali"));

console.log(myAllias);

// Modules - Part 3 Named Export Vs Default Export

// thsi one is Default Export so no need to add  myAllias
console.log(defultExport());
