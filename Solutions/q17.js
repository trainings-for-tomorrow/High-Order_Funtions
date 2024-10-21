//Use reduce to add up all the numbers in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const n=numbers.reduce((acc, num) => acc + num, 0)
console.log(n);
