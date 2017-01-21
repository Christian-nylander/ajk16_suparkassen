var BASE_URL = 'http://localhost:3000/api/products';

function getProducts() {
  $.ajax({
    url: BASE_URL,
    type: 'GET',
    success: renderProducts,
    error: function (err) {
      console.error(err.message);
    }
  });
}