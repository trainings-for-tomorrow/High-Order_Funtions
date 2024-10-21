//Use some to check if any names are longer than six letters in the names array.
const names = ['Ahmed', 'Hassan', 'Fatima', 'Ayesha']
const nm=names.some((name)=>name.length>6);
console.log(nm);