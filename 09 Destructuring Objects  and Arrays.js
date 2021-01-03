/*
  Destructuring
  - Object
  - Array
  - Parameter
*/

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
