$(document).ready(init());

function init() {
  $('#menuIcon').click(function () {
    $('#mobile-navigation').toggleClass('active');
  });
}