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
  if (cart.length===0) return 'Your shopping cart is empty.';
  var str = 'In your cart, you have ';
  for (let i=0; i < cart.length; i++){
    var buffer = '';
    if (i < cart.length-1) buffer += ',';
    if (i === cart.length-2) buffer += ' and';
    if (i === cart.length-1) buffer = '.';
    str += `${cart[i].itemName} at $${cart[i].itemPrice}${buffer}`;
  }
  return str;
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
