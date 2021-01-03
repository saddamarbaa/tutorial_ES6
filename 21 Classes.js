/*
  OOP => Classes Part 1
  Old and New Class Syntax
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`Hello ${this.name} Your Age is ${this.age}`);
  }
  getDays() {
    console.log(`Your in Days ${this.age} Days`);
  }
}

// user constructor
console.log(User.prototype);

const firstUser = new User("Sadam", 24);
firstUser.getDays(); // Your in Days 24 Days
firstUser.getInfo(); // Hello Sadam Your Age is 24

class Student {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  // Statics method
  static countStudent() {
    console.log("we have 50 Student in this school");
  }

  register() {
    console.log(`Hello ${this.name} You are now registred in school`);
  }
}

let std1 = new Student("Ali", 26, 12);
let std2 = new Student("John", 22, 1);

std1.register();
// std1.countStudent();
std2.register();
Student.countStudent();

// inherited Student class
class studentMemember extends Student {
  constructor(name, age, id, gpa) {
    super(name, age, id);
    this.gpa = gpa;
  }
  getGpa() {
    console.log(`Your gpa is ${this.gpa}`);
  }
}

let stud3 = new studentMemember("Jhon Joe", 19, 21, 3.4);
stud3.getGpa();
stud3.register();
