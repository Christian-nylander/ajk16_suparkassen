var BASE_URL = 'http://localhost:3000/api';

function getProducts() {
  $.ajax({
    url: BASE_URL + '/products',
    type: 'GET',
    success: renderProducts,
    error: function (err) {
      console.error(err.message);
    }
  });
}

function searchProducts(query) {
    $.ajax({
        type: "GET",
        url: BASE_URL + "/search?q=" + query,
        success: renderProducts,
        error: function (err) {
            console.error(err.message);
        }
    });
}

function sendData(event) {
    event.preventDefault();

    var firstName = $('#firstname').val();
    var lastName = $('#lastname').val();
    var email = $('#email').val();
    var totalPrice = getTotalPriceFromCart();
    var data = { firstname: firstName, lastname: lastName, email: email, totalprice: parseInt(totalPrice) };

    $.ajax({
        type: "POST",
        url: BASE_URL + '/payment',
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.error(err.message);
        }
    });
}

