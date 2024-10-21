//Use every to check if all the countries contain the word "stan."
const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const country = countries.every((c)=>c.includes('stan'));

console.log(country);