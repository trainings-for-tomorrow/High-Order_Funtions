//Use find to get the first country with six letters in the countries array.
const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const country=countries.find((c)=>c.length=='6')
console.log(country);