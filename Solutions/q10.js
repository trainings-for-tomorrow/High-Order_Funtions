//Use map to return only the prices from the products array.
const products = [
    { product: 'apple', price: 3 },
    { product: 'orange', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'dates', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  const price=products.map((p)=>p.price)
  console.log(price)