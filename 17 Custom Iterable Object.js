/*
  Custom Iterable Object
*/

// let Create Custom Iterable Object

const doctors = {
  name: "Ali",
  age: 36,
  hospital: "batam",
  //  let create custom iterable object

  [Symbol.iterator]() {
    let counter = 0;
    let properties = Object.keys(this);
    // console.log(properties);
    return {
      next() {
        return {
          // value: properties[counter],
          value: doctors[properties[counter]],
          done: counter++ === properties.length,
        };
      },
    };
  },
};

for (let doctor of doctors) {
  console.log(doctor);
}
