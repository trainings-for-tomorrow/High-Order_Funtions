//some() Checks if at least one element in the array meets a specified condition ,returns boolean value
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
//every() Checks if all elements in the array meet a specified condition , also returns boolean value
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const allEven = number.every(num => num % 2 === 0);
console.log(allEven);