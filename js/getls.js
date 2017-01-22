function getItemsFromCart() {
    var cartItems = getItemFromLocalStorage('cart');
    console.log(cartItems[0]);

    $('.cart-item').remove();


    var sum = 0;
    cartItems.forEach(function (cartItem) {
        var cartItemElement = renderLocalStorage(cartItem);
        $('#orderContainer').append(cartItemElement);
        sum += cartItem.quantity * cartItem.price;
    });

    $('#total-sum').text(sum + ':-');
}


function renderLocalStorage(cartItem) {

    var itemContainer = $('<div class="cart-item">');

    var itemName = $('<h1 class="name">').text(cartItem.name);

    var iconGroup = $('<div class="info-group">');
    var price = $('<div class="price-icon-container">');
    var priceIcon = $('<i class="fa fa-tag" aria-hidden="true"></i>');
    var priceText = $('<span class="label">').text(cartItem.price + ':-');

    var procent = $('<div class="procent-icon-container">');
    var procentIcon = $('<i class="fa fa-glass" aria-hidden="true"></i>');
    var procentText = $('<span class="label">').text(cartItem.alcohol + '%');

    price.append(priceIcon, priceText);
    procent.append(procentIcon, procentText);

    iconGroup.append(itemName, price, procent);

    var buttonDelete = $('<i class="fa fa-trash" aria-hidden="true"></i>').click(function () {
        deleteItemFromCart(cartItem);
    });

    var buttonSubtract = $('<i class="fa fa-minus" aria-hidden="true"></i>').click(function () {
        subtractQuantity(cartItem);
    });

    var itemQuantity = $('<input type="number" class="quantity">').val(cartItem.quantity);
    itemQuantity.attr('id', cartItem._id);

    var buttonAdd = $('<i class="fa fa-plus" aria-hidden="true"></i>').click(function () {
        addQuantity(cartItem);
    });

    var subTotal = $('<div class="sub-total">');
    var subPrice = $('<div class="price">').text((cartItem.price * cartItem.quantity) + ':-');
    var subLabel = $('<div class="label">').text('SUMMA');

    subTotal.append(subLabel, subPrice);

    var cartItemFooter = $('<div class="cart-item-footer">');

    cartItemFooter.append(buttonDelete, buttonSubtract, itemQuantity, buttonAdd, subTotal);

    return itemContainer.append(iconGroup, cartItemFooter);

}


// remove item from cart
function deleteItemFromCart(cartItem) {
    var cart = getItemFromLocalStorage('cart');
    console.log(cart);

    var filteredCart = cart.filter(function (item) {
        return item._id !== cartItem._id
    });

    console.log(filteredCart);

    localStorage.setItem('cart', JSON.stringify(filteredCart));

    var x = JSON.parse(localStorage.getItem('cart'));
    console.log(x);

    getItemsFromCart();
}

function subtractQuantity(cartItem) {
    console.log('ta bort funkar');

    var cart = getItemFromLocalStorage('cart');

    cart.forEach(function (item) {
        if (item._id === cartItem._id) {

            if (item.quantity > 1) {
                item.quantity--;
                $('#' + cartItem._id).val(item.quantity);

                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
    });
}

function addQuantity(cartItem) {
    console.log('add funkar');

    var cart = getItemFromLocalStorage('cart');

    cart.forEach(function (item) {
        if (item._id === cartItem._id) {
            item.quantity++;
            $('#' + cartItem._id).val(item.quantity);

            localStorage.setItem('cart', JSON.stringify(cart));
        }
    });
}

function getItemFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

getItemsFromCart();
