var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: item, itemPrice: Math.floor(Math.random()*100+1)};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var str = 'In your cart, you have';
  var buffer = '';
  for (let i=0; i < cart.length; i++){
    if (i < cart.length-1 && cart.length > 2) buffer
    str += `${cart[i].itemName} at $${cart[i].itemPrice}${
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
