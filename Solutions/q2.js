//Define a callback function before using it in forEach, map, filter, or reduce.
//function that can be callbacked in other function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function isEven(number) {
    return number % 2 === 0;
  }
numbers.forEach(num => {
  if (isEven(num)) {
    console.log(num);
  }
});
const n=numbers.map(isEven)
console.log(n);

const num=numbers.filter(isEven)
console.log(num);
const sum = numbers.reduce((acc, num) => {
    return isEven(num) ? acc + num : acc;
  }, 0);
  
  console.log(sum);
  
  