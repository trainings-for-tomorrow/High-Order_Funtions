//Use reduce to join all the countries into a sentence.
const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const country = countries.reduce((acc, c) => acc ? `${acc}, ${c}` : c, '');

console.log(country);