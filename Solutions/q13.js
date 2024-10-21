//Use filter to get countries with six or more letters.
const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const country=countries.filter((c)=>c.length>='6')
console.log(country);