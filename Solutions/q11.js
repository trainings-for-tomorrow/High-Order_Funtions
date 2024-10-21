//Use filter to get countries that have "stan" in their name.
const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const country=countries.filter((c)=>c.includes('stan'))
console.log(country);
