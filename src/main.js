$(document).ready(function() {
  console.log('sanity check');
})

$('form').submit(function(event) {
  event.preventDefault();
  var formInfoArr = $(this).serializeArray();
  $('.results').append("<h2>" + formInfoArr[0].value + "</h2>")
  $('.results').append("<img src=" + formInfoArr[1].value + ">");
  $('.results').append("<p>" + formInfoArr[2].value + "</p>")
})
