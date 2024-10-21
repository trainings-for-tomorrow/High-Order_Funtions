//Use filter to get countries that start with the letter "S."
const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const country=countries.filter((c)=>c.startsWith('S'))
console.log(country);