//Use filter to return products with valid prices.
const products = [
    { product: 'apple', price: 3 },
    { product: 'orange', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'dates', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  const price=products.filter((p)=>p.price!=''&& p.price!=' ')
  console.log(price);
  