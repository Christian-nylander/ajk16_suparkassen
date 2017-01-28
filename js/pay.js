function handleForm(event) {
  event.preventDefault();
  var firstName = $('#first-name').val();
  var lastName = $('#last-name').val();
  var email = $('#email').val();

  var cart = JSON.parse(localStorage.getItem('cart'));

  var data = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    items: cart
  };

  console.log(data);

  //
  // $.ajax({
  //   url: 'http://localhost:5000/test',
  //   type: 'POST',
  //   contentType: 'application/json',
  //   data: JSON.stringify(data),
  //   success: function(data) {
  //     console.log(data);
  //   }
  // });
}