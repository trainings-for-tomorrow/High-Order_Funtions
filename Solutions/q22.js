//What's the difference between find and findIndex?
//find() will search the number 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n=numbers.find((num)=>num==4)
console.log(n); //give number 4
//findindex() will search the index of that number
const num=numbers.findIndex((n)=>n==4)
console.log(num);// tells the index of number 4

