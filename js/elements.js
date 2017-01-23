function createProduct() {
  var rootElement = $('<div class="product">');
  var image = $('<img alt="product">').attr('src', product.img);
  var content = $('<div class="content">');
  var nameElement = $('<h2 class="name">').text(product.name);
  var description = $('<p class="description">').text(product.description);

  var iconGroup = $('<div class="icon-group">');
  var price = $('<div class="price-icon-container">');
  var priceIcon = $('<i class="fa fa-tag" aria-hidden="true"></i>');
  var priceText = $('<span class="label">').text(product.price + ':-');

  var procent = $('<div class="procent-icon-container">');
  var procentIcon = $('<i class="fa fa-glass" aria-hidden="true"></i>');
  var procentText = $('<span class="label">').text(product.alcohol + '%');

  price.append(priceIcon, priceText);
  procent.append(procentIcon, procentText);

  iconGroup.append(price, procent);

  content.append(nameElement, description, iconGroup);

  var footerElement = $('<div class="footer">');
  var inputElement = $('<input type="number" placeholder="ANTAL"/>').attr('id', product._id);
  var buttonElement = $('<button>LÄGG TILL</button>');
  // add event listener
  buttonElement.click(function () {
    product.quantity = parseInt($('#' + product._id).val()) || 1;
    saveToCart(product);
    updateCart();

  });
  footerElement.append(inputElement, buttonElement);

  return rootElement.append(
    image,
    content,
    footerElement
  );
}