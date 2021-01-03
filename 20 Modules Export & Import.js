// 📁 main.js
// Modules - Part 2 Import All And Aliases

// import { userAge, months, myNumber, sayHello } from "./20app.js";

// console.log(sayHello("saddam"));
// console.log(months);
// console.log(myNumber);
// console.log(userAge);

// for (let month = 0; month < months.length; month++) {
//   console.log(months[month]);
// }

// Modules - Part 2 Import All And Aliases

import defultExport, * as myAllias from "./20app.js";

console.log(myAllias.months);
console.log(myAllias.myNumber);
console.log(myAllias.userAge);
console.log(myAllias.sayHello("Ali"));

console.log(myAllias);

// Modules - Part 3 Named Export Vs Default Export

// thsi one is Default Export so no need to add  myAllias
// console.log(defultExport());

import User from "./20app.js";

let user1 = new User("Saddam", "asdsd@gmail.com");
user1.getUserInfo();
class Admin extends User {
  constructor(name, email, sallary) {
    super(name, email);
    this.sallary = sallary;
  }

  getSalary() {
    console.log(`Your Salar for this month is ${this.sallary} `);
  }
}

let user2 = new Admin("Manzer", "manze@edi.io", "200$");
user2.getUserInfo();
user2.getSalary();
