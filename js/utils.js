function saveToCart(data) {
  var items = JSON.parse(localStorage.getItem('cart'));
  var isInCart = false;

  if ( !items ) {
    items = [];
  } else {
    items.forEach(function (item) {
      if ( item._id === data._id ) {
        item.quantity += data.quantity;
        isInCart = true;
      }
    })
  }

  if ( !isInCart ) {
    items.push(data);
  }

  localStorage.setItem('cart', JSON.stringify(items));
}

function getCart() {
  var cart = JSON.parse(localStorage.getItem('cart'));
  return cart;
}

function handleCheckout() {
  var order = {
    firstname: 'firstname', // etc
    items: getCart()
  };

  console.log(order);
}

function updateCart() {
  // empty all inputs
  $('input').val('');
  var cart = getCart();
  // console.log(cart);

  var count = 0;
  var totalPrice = 0;
  cart.forEach(function (item) {
    count += item.quantity;
    totalPrice += item.quantity * item.price;
  });

  $('#badge').text('x ' + count);
  $('#total-price').text(totalPrice + ' SEK');
}

function getTotalPriceFromCart() {
  var cart = JSON.parse(localStorage.getItem('cart'));

  var totalPrice = 0;

  cart.forEach(function (item) {
    totalPrice += item.quantity * item.price;
  });
  return totalPrice;
}
