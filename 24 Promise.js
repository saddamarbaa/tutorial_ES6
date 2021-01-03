/*
Promise Intro
- Promise Is One Of The Best Features In ES6
- Promise Make It Easy To Support Asynchronous Programming
- Promise in JavaScript Is Like Promise in Real Life
- Promise Is Something That Will Happen in The Future
- Promise Is A Placeholder For A Future Value
- You Booked A Cinema Ticket, You Have A Promise From Cinema Owner 2 Have A Seat
- You Got Task To Do, U Promised Your Boss To Do The Task
- You Ordered Food From Restaurant
--- [ Promise ] Is The Order Record
--- [ The Future Value ] Is The Food You Will Receive
- You Ordered iPhone From Souq Shop
--- [ Promise ] Is The Order Record
--- [ The Future Value ] Is The iPhone You Will Receive
- Promise Is An Object
- Promise Is The Event Completion Or Failure of Async Operation & Its Resulting Value.
- JavaScript Use Callbacks For Asynchronous Programming
--- [1] Function Called And Do The Task
--- [2] Action Complete
--- [3] Another Function Called
--- [4] Action Complete
--- [5] Another Function Called
- In Complex Cases => Every Call Add Nesting Level
- http://callbackhell.com/
- Promise Avoiding Callback Hell Or Pyramid Of Doom
- Promise Is One Of This States
[1] Pending => Not Fulfilled Or Rejected
[2] Fulfilled => Operation Succeeded
[3] Rejected => Operation Failed
*/

const myPromise = new Promise((resolve, reject) => {
// console.log("Welcome To My First Promise");
/*
Asynchronous Operation
Fulfilled => resolve
Rejected => reject
*/

// let connect = false;
let connect = true;
if (connect) {
resolve("Connection Established");
} else {
reject(Error("Connection Failed"));
}
}).then(
(resolved) => console.log(resolved),
(rejected) => console.log(rejected)
);

console.log(typeof myPromise);

// Another Syntax

const theResolved = (resolved) => console.log(resolved);
const therejected = (rejected) => console.log(rejected);

myPromise.then(theResolved, therejected);

// Then And Catch And Training

const demoPromise = new Promise((resolve, reject) => {
// only one State Allowed
// resolve("resolved");
// reject("Rjected"); // Igonored

if (Math.random() * 100 < 87) {
resolve("Good Luck");
} else {
reject("Bad Luck");
}
});

// demoPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// );

// demoPromise.then((resolved) => console.log(resolved));
// demoPromise.catch((rejected) => console.log(rejected));

demoPromise.then((resolved) => console.log(resolved));
demoPromise.catch((rejected) => console.log(rejected));

/*
Promise – And XMLHTTPRequest  
git information from my github
*/
// Without Promise

function getFirstRepo(apiURL) {
let myRequest = new XMLHttpRequest();

myRequest.onreadystatechange = function () {
if (this.readyState === 4 && this.status === 200) {
/*
Ready State => The Status Of The Request
[0] Request Not Initialized
[1] Server Connection Established
[2] Request Recieved
[3] Processing Request
[4] Request Is Finished And Response Is Ready
Status => Response Status Code
[200] Ok
[404] Not Found
*/

// console.log(this.responseText);
console.log(JSON.parse(this.responseText)[0].name); // my firs repo name
}
};

// XMLHttpRequest.open(Method, URL, Async, User, Pass)
myRequest.open("GET", apiURL, true);

// Send The Request
myRequest.send();
}

// call the function and pass my github URL as argument
getFirstRepo("https://api.github.com/users/saddamarbaa/repos");

// With Promise

const getSecondRepo = (apiURL) => {
return new Promise((resolve, reject) => {
let myRequest = new XMLHttpRequest();
myRequest.onload = function () {
if (this.readyState === 4 && this.status === 200) {
resolve(JSON.parse(this.responseText)[1].name);
} else {
reject(Error(this.statusText));
}
};
myRequest.open("GET", apiURL, true);
myRequest.send();
});
};

// getSecondRepo("https://api.github.com/users/saddamarbaa/repos").then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// );

getSecondRepo("https://api.github.com/users/saddamarbaa/repos").then(
(result) => {
let div = document.createElement("div");
// the repo which been returned
let text = document.createTextNode(result);
div.appendChild(text);
document.body.appendChild(div);
}
),
(error) => console.error();
