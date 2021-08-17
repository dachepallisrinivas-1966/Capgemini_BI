let today = new Date();
console.log(today);

let dob = new Date("1966-04-09");
console.log(dob);

console.log(dob.getDay());          // 6    - week day number   (0 - sun, 1 - mon, ..)
console.log(dob.getMonth());        // 3    -   0 - jan, 1 - feb
console.log(dob.getFullYear());     // 1966

console.log(today.getDay());          // 2  - week day number
console.log(today.getMonth());        // 7
console.log(today.getFullYear());     // 2021


console.log(today.toISOString());
console.log(today.toDateString());
console.log(today.toTimeString());
