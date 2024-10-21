const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const names = ['Ahmed', 'Hassan', 'Fatima', 'Ayesha']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'apple', price: 3 },
  { product: 'orange', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'dates', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//foreach() function is the function which execute for each element once
countries.forEach((val=>console.log(val))); 
//const items=countries.forEach((val=>console.log(val))); 
//console.log(items)  =>  will not return any values ,give undefined output 

//map() it returns the value
const items=countries.map((val)=>{
    console.log(val)
    return val; //returns values
}); 

//filter() requires condition
const country=countries.filter((cntry)=>cntry.length=='8'); 
console.log(country);

//reduce() combine elements into single output
const n=numbers.reduce((acc, num) => acc + num, 0)
console.log(n);