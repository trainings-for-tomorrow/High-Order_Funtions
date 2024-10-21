//Use findIndex to get the position of the first country with six letters in the countries array.
const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const country=countries.findIndex((c)=>c.length=='6')
console.log(country);