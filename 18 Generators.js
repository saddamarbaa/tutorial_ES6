/*
  Generators Part 1
  Intro And What's Generators
*/

function* GenerateTickets() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let iterator = GenerateTickets();

console.log(iterator);
console.log(iterator.next());

console.log(iterator.next().value);
console.log(iterator.next().done);

console.log(`${"#".repeat(10)}`);
console.log("Atfer new cusomer come now let ask for new ticket");
console.log(iterator.next().value);
console.log(iterator.next().done);

console.log(`${"#".repeat(10)}`);
console.log("agin Atfer new cusomer come now let ask for new ticket");
console.log(iterator.next().value);
console.log(iterator.next().done);

console.log(`${"#".repeat(10)}`);

let arrayForTest = [10, 20, 30, 40, 50, 60, 70];

function* GenerateNumbers(numbers) {
  // loop through Yield
  // yield* [1, 2, 3, 4];

  for (let number = 0; number < numbers.length; number++) {
    yield numbers[number];
  }
}

let getNumber = GenerateNumbers(arrayForTest);
console.log(getNumber);
console.log(typeof getNumber);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
console.log(getNumber.next().value);
// console.log(getNumber.next().value);
console.log(getNumber.next());
console.log(`${"#".repeat(10)}`);

/*
  Generators Part 2
  Functionality & Return
*/

// function orderBook() {
//   window.alert("You Clicked On Button To Order Book");
//   console.log("You Clicked On Button To Order Book");

//   window.alert("You added new Book to the list");
//   console.log("You added new Book to the list");

//   window.alert("Payment is done");
//   console.log("Payment is done");
// }

// let orderNow = orderBook();

// function* orderBook() {
//   window.alert("You Clicked On Button To Order Book");
//   console.log("You Clicked On Button To Order Book");

//   window.alert("You added new Book to the list");
//   console.log("You added new Book to the list");

//   window.alert("Payment is done");
//   console.log("Payment is done");
// }

// let orderNow = orderBook();
// console.log(orderNow);
// console.log(orderNow.next().value);

function* mySkills() {
  yield "Html";
  yield "css";
  yield "javascript";
  yield "python";
  yield "c++";
}

// loop on Iterators

let skills = mySkills();
for (let skill of skills) {
  console.log(skill);
}

// loop on Genrators

for (let skill of mySkills()) {
  console.log(skill);
}

/*
  Generators Part 3
  Delegating Generators
*/

function* GenerateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* GenerateNames() {
  yield "Saddam";
  yield "Arbaa";
  yield "Adam";
}

function* generateAll() {
  yield* GenerateNums();
  yield* GenerateNames();
}

let generate_all = generateAll();

// will finished yeild all the element in first function then continue to next one

console.log(`${"#".repeat(10)}`);
console.log(generate_all.next());
console.log(generate_all.next());
console.log(generate_all.next());
console.log(generate_all.next());
console.log(generate_all.next());
console.log(generate_all.next());
// console.log(generate_all.next()); /* undifned */
