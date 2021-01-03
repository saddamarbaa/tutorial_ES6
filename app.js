const userAge = 23;

// export an array
let months = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sep", "Oct", "Nov", "Dec"];

// export an array
// export let numbers = [1, 2, 3, 4, 5, 6];
let numbers = [1, 2, 3, 4, 5, 6];

function sayHello(userName) {
  return `Hello ${userName} nice to see You`;
}

// export all one time
export { userAge, months, numbers as myNumber, sayHello };
