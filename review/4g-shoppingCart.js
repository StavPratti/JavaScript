const shoppingCart = {
  items: [
    { productName: "Apples", price: 8.59, quantity: 40 },
    { productName: "Oranges", price: 12, quantity: 100 }
  ],

  // push for arrays
  addItemToCart(item) {
    this.items.push(item)
  }
}

shoppingCart.addItemToCart({ productName: "Honey", price: 18.59, quantity: 400 }) 
console.log(shoppingCart.items)

  for (const item of shoppingCart.items) {
    console.log(item.productName)
  }